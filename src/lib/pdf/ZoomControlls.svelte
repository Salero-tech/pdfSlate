<script lang="ts">
    import { enumEntries } from '@embedpdf/core';
import { useZoom } from '@embedpdf/plugin-zoom/svelte';
import { type PinchCustomEvent, type GestureCustomEvent } from 'svelte-gestures';

const zoom = useZoom();

const wheelZoom = (event: WheelEvent) => {
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

let zoomScale = zoom.state.currentZoomLevel;

export function pinchTouchDown(event: GestureCustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    zoomScale = zoom.state.currentZoomLevel; // Save the zoom at the start of the gesture
}

export function pinchzoomFun(event: PinchCustomEvent) {
    event.preventDefault();
    event.stopPropagation();
    // Calculate the new zoom based on the initial zoom and the pinch scale
    const newZoom = zoomScale * event.detail.scale;
    zoom.provides?.requestZoom(newZoom, {
        vx: event.detail.center.x,
        vy: event.detail.center.y
    });
}

const controlKeyboardZoom = (event: KeyboardEvent) => {
    if (!event.ctrlKey) return;
    if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) return;
    if (event.key === '+' || event.key === '=') {
        zoom.provides?.zoomIn();
    } else if (event.key === '-') {
        zoom.provides?.zoomOut();
    }
};

$effect(() => {
    window.addEventListener('wheel', wheelZoom, { passive: false });
    window.addEventListener('keydown', controlKeyboardZoom);
    return () => {
        window.removeEventListener('wheel', wheelZoom);
        window.removeEventListener('keydown', controlKeyboardZoom);
    };
});


</script>

{#if zoom.provides}
    <div style="padding: 8px; background: #eee; display: flex; gap: 8px; align-items: center;">
        <span>Zoom: {Math.round(zoom.state.currentZoomLevel * 100)}%</span>
        <button onclick={() => zoom.provides.zoomOut()}>-</button>
        <button onclick={() => zoom.provides.zoomIn()}>+</button>
        <button onclick={() => zoom.provides.requestZoom(1.0)}>Reset</button>
    </div>
{/if}