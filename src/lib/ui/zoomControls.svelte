<script lang="ts">
let className = '';
export { className as class };
</script>

<div class="zoom-pill {className}" aria-label="Zoom controls">
    <button class="zoom-btn" title="Zoom Out">-</button>
    <div class="zoom-label">100%</div>
    <button class="zoom-btn" title="Zoom In">+</button>
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
        cursor: default;
    }
</style>
