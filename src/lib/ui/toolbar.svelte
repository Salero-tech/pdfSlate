<script lang="ts">
  import ModeButton from './toolbar/ModeButton.svelte';
  import ToolSlot from './toolbar/ToolSlot.svelte';
  import { icons } from './toolbar/icons';
</script>

<aside class="toolbar" aria-label="Tools">
  <!-- Modes -->
  <div class="mode-stack">
    <ModeButton icon={icons.touch} label="Touch mode" />
    <ModeButton icon={icons.mouse} label="Mouse mode" />
  </div>

  <div class="divider"></div>

  <!-- Tools with fixed slots -->
  <div class="tool-stack">
    <ToolSlot 
      id="tool-highlighter"
      icon={icons.highlighter}
      label="Highlighter"
      colors={['yellow', 'lime', 'pink', 'orange', 'cyan', 'gray']}
      maxThickness={30}
      defaultThickness={8}
    />

    <ToolSlot 
      id="tool-pen"
      icon={icons.pen}
      label="Pen"
      checked={true}
      colors={['black', 'blue', 'red', 'green', 'purple', 'brown']}
      maxThickness={20}
      defaultThickness={4}
    />
  </div>

  <div class="divider"></div>

  <!-- Add button -->
  <button class="add" aria-label="Add">
    {@html icons.add}
  </button>
</aside>

<style>
  .toolbar {
    position: fixed;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 68px;
    padding: 12px 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.08));
    border: 1px solid rgba(255,255,255,0.16);
    border-radius: 18px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
    z-index: 20;
    font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Arial, Noto Sans;
  }

  .mode-stack, .tool-stack {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }

  .divider {
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.16), transparent);
    margin: 4px 0;
  }

  .add {
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
  
  .add:hover {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.1);
    transform: translateY(-1px);
  }

  :global(.toolbar .icon) {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    vector-effect: non-scaling-stroke;
  }
</style>
