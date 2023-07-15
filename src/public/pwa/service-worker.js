importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

workbox.core.setCacheNameDetails({
    prefix: 'ochase-search',
    suffix: 'v1.0.0',
});
workbox.core.skipWaiting();
workbox.core.clientsClaim();
workbox.precaching.precacheAndRoute(self.__precacheManifest || []);

// 缓存web的css资源
workbox.routing.registerRoute(
    /.*\.css/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'css-cache',
    }),
);

// 缓存web的js资源
workbox.routing.registerRoute(
    /.*\.js/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'js-cache',
    }),
);

// 缓存web的图片资源
workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg|webp)$/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'images-cache',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 设置缓存有效期为30天
            }),
        ],
    }),
);

// 如果有资源在其他域名上，比如cdn、oss等，这里做单独处理，需要支持跨域
workbox.routing.registerRoute(
    /^https:\/\/cdn\.ochase\.com\/.*\.(jpe?g|png|gif|svg)/,
    new workbox.strategies.StaleWhileRevalidate({
        cacheName: 'cdn-images',
        plugins: [
            new workbox.expiration.ExpirationPlugin({
                maxEntries: 60,
                maxAgeSeconds: 5 * 24 * 60 * 60, // 设置缓存有效期为5天
            }),
        ],
        fetchOptions: {
            credentials: 'include', // 支持跨域
        },
    }),
);
