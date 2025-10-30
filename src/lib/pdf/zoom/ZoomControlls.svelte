<script lang="ts">
    import { useZoom } from '@embedpdf/plugin-zoom/svelte';
    import { wheelZoom, controlKeyboardZoom} from './keyboarAndMouseZoom';
    import { handleTouchStart, handleTouchMove, handleTouchEnd } from './pinchZoom';
    import { zoomStore } from '$lib/stores/zoomStore.svelte';

const zoom = useZoom();

    zoomStore.subscribe((value) => {
        if (zoom && zoom.provides) {
            zoom.provides.requestZoom(value);
        }
    });

    // Update zoomStore whenever zoom.state.currentZoomLevel changes
    $effect(() => {
        if (zoom?.state?.currentZoomLevel) {
            zoomStore.set(zoom.state.currentZoomLevel);
        }
    });

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