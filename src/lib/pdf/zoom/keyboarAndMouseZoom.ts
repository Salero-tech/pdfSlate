import { useZoom } from '@embedpdf/plugin-zoom/svelte';


export function wheelZoom(event: WheelEvent, zoom: ReturnType<typeof useZoom>) {
    if (event.ctrlKey) {
        event.preventDefault();
        const delta = event.deltaY;
        if (delta < 0) {
            zoom.provides?.zoomIn();
        } else {
            zoom.provides?.zoomOut();
        }
    }
};


export function controlKeyboardZoom (event: KeyboardEvent, zoom: ReturnType<typeof useZoom>) {
    if (!event.ctrlKey) return;
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
    event.preventDefault();
    if (event.key === '+' || event.key === '=') {
        zoom.provides?.zoomIn();
    } else if (event.key === '-') {
        zoom.provides?.zoomOut();
    }
};