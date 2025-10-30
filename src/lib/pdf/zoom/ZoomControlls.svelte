<script lang="ts">
import { useZoom } from '@embedpdf/plugin-zoom/svelte';
import { wheelZoom, controlKeyboardZoom} from './keyboarAndMouseZoom';
import { handleTouchStart, handleTouchMove, handleTouchEnd } from './pinchZoom';

const zoom = useZoom();

$effect(() => {
    const wheelZoomHandler = (event: WheelEvent) => wheelZoom(event, zoom);
    const controlKeyboardZoomHandler = (event: KeyboardEvent) => controlKeyboardZoom(event, zoom);
    const handleTouchStartHandler = (event: TouchEvent) => handleTouchStart(event, zoom);
    const handleTouchMoveHandler = (event: TouchEvent) => handleTouchMove(event, zoom);
    const handleTouchEndHandler = (event: TouchEvent) => handleTouchEnd(event);

    window.addEventListener('wheel', wheelZoomHandler, { passive: false });
    window.addEventListener('keydown', controlKeyboardZoomHandler);
    window.addEventListener('touchstart', handleTouchStartHandler, { passive: false });
    window.addEventListener('touchmove', handleTouchMoveHandler, { passive: false });
    window.addEventListener('touchend', handleTouchEndHandler);

    return () => {
        window.removeEventListener('wheel', wheelZoomHandler);
        window.removeEventListener('keydown', controlKeyboardZoomHandler);
        window.removeEventListener('touchstart', handleTouchStartHandler);
        window.removeEventListener('touchmove', handleTouchMoveHandler);
        window.removeEventListener('touchend', handleTouchEndHandler);
    };
});


</script>

{#if zoom && zoom.provides}
    <div style="padding: 8px; background: #eee; display: flex; gap: 8px; align-items: center;">
        <span>Zoom: {Math.round(zoom.state.currentZoomLevel * 100)}%</span>
        <button onclick={() => zoom.provides?.zoomOut()}>-</button>
        <button onclick={() => zoom.provides?.zoomIn()}>+</button>
        <button onclick={() => zoom.provides?.requestZoom(1.0)}>Reset</button>
    </div>
{/if}