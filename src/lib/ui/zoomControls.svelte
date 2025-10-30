<script lang="ts">
    import { zoomStore } from '$lib/stores/zoomStore.svelte';

    function handleZoomInput(event: Event) {
        const target = event.target as HTMLInputElement;
        const value = parseInt(target.value);
        if (!isNaN(value) && value > 0 && value <= 500) {
            $zoomStore = value / 100;
        }
    }
</script>

<div class="zoom-pill" aria-label="Zoom controls">
    <button class="zoom-btn" title="Zoom Out" onclick={() => $zoomStore-=0.1}>-</button>
    <input 
        class="zoom-label" 
        type="number" 
        min="10" 
        max="500" 
        value={($zoomStore * 100).toFixed(0)}
        onchange={handleZoomInput}
        title="Zoom percentage"
    />
    <button class="zoom-btn" title="Zoom In" onclick={() => $zoomStore+=0.1}>+</button>
</div>

<style>
    .zoom-pill {
        position: fixed;
        right: 20px;
        bottom: 20px;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px;
        border-radius: 999px;
        border: 1px solid rgba(255, 255, 255, 0.16);
        background: rgba(20, 24, 32, 0.8);
        backdrop-filter: blur(8px);
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
        z-index: 14;
    }

    .zoom-btn,
    .zoom-label {
        height: 38px;
        min-width: 38px;
        padding: 0 12px;
        display: grid;
        place-items: center;
        border-radius: 999px;
        border: 1px solid transparent;
        color: #e6edf3;
        background: transparent;
        cursor: pointer;
        transition: 160ms ease;
        font-weight: 600;
        font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, Noto Sans;
        -webkit-tap-highlight-color: transparent;
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        user-select: none;
    }

    .zoom-btn:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .zoom-label {
        border: 1px solid rgba(255, 255, 255, 0.16);
        background: rgba(255, 255, 255, 0.06);
        padding: 0 16px;
        font-size: 12px;
        color: #9aa4b2;
        cursor: text;
        width: 60px;
        text-align: center;
        outline: none;
    }

    .zoom-label:focus {
        background: rgba(255, 255, 255, 0.1);
        border-color: rgba(91, 156, 255, 0.6);
        color: #e6edf3;
    }

    /* Hide number input arrows */
    .zoom-label::-webkit-outer-spin-button,
    .zoom-label::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
    
    .zoom-label[type=number] {
        -moz-appearance: textfield;
    }
</style>
