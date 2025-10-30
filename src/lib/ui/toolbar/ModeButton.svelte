<script lang="ts">
  let { icon, label }: { icon: string; label: string } = $props();
</script>

<button class="mode" aria-label={label}>
  {@html icon}
</button>

<style>
  .mode {
    position: relative;
    width: 100%;
    height: 48px;
    border-radius: 12px;
    border: 1px solid transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255,255,255,0.06);
    color: #e6edf3;
    cursor: pointer;
    transition: all 200ms ease;
    outline: none;
  }
  
  .mode:hover {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.1);
    transform: translateY(-1px);
  }

  :global(.mode .icon) {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    vector-effect: non-scaling-stroke;
  }
</style>
