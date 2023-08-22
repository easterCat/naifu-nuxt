export const useFPS = () => {
    let frameCount = 0;
    let startTime = 0;
    const route = useRoute();

    const calculateFPS = (timestamp: any) => {
        if (!startTime) {
            startTime = timestamp;
        }

        frameCount++;

        const progress = timestamp - startTime;
        if (progress >= 1000) {
            const fps = Math.round((frameCount * 1000) / progress);
            const newElement = document.createElement('span');
            newElement.textContent = `FPS ${fps}`;
            newElement.style.position = 'fixed';
            newElement.style.background = '#000';
            newElement.style.color = '#fff';
            newElement.style.top = '10px';
            newElement.style.right = '10px';
            newElement.style.zIndex = '10000';
            newElement.style.padding = '3px 5px';

            const body = document.getElementsByTagName('body')[0];
            body.appendChild(newElement);
            // 重置计数器
            frameCount = 0;
            startTime = timestamp;
        }

        // 请求下一帧
        requestAnimationFrame(calculateFPS);
    };

    const fps = () => {
        if (route && route.query.fps) {
            requestAnimationFrame(calculateFPS);
        }
    };

    return { fps };
};
