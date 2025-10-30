import { useZoom } from '@embedpdf/plugin-zoom/svelte';


let initialDistance = 0;
let zoomScale = 1;
let lastUpdateTime = 0;
const UPDATE_INTERVAL = 50; // Update zoom every 50ms during pinch

export function getDistance (touch1: Touch, touch2: Touch): number {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
};

export function handleTouchStart (event: TouchEvent, zoom: ReturnType<typeof useZoom>) {
    if (event.touches.length === 2) {
        event.preventDefault();
        initialDistance = getDistance(event.touches[0], event.touches[1]);
        zoomScale = zoom.state.currentZoomLevel;
    }
};

export function handleTouchMove (event: TouchEvent, zoom: ReturnType<typeof useZoom>) {
    if (event.touches.length === 2) {
        event.preventDefault();
        
        const currentDistance = getDistance(event.touches[0], event.touches[1]);
        const scale = currentDistance / initialDistance;
        const newZoom = zoomScale * scale;
        
        // Throttle updates
        const now = Date.now();
        if (now - lastUpdateTime > UPDATE_INTERVAL) {
            zoom.provides?.requestZoom(newZoom);
            lastUpdateTime = now;
        }
    }
};

export function handleTouchEnd (event: TouchEvent) {
    if (event.touches.length < 2) {
        initialDistance = 0;
    }
}
