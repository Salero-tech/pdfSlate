<script lang="ts">
  let { 
    id, 
    icon, 
    label, 
    checked = false,
    colors,
    maxThickness = 20,
    defaultThickness = 4
  }: { 
    id: string; 
    icon: string; 
    label: string; 
    checked?: boolean;
    colors: string[];
    maxThickness?: number;
    defaultThickness?: number;
  } = $props();
</script>

<div class="tool-slot">
  <input class="tool-radio" type="radio" name="tool" {id} {checked} />
  <label class="tool" for={id} aria-label={label}>
    {@html icon}
  </label>

  <input type="checkbox" id="{id}-menu" class="menu-toggle" />
  <label class="settings-btn" for="{id}-menu" aria-label="{label} settings">Set</label>

  <div class="settings-popover" role="dialog" aria-label="{label} settings">
    <div class="settings-header">
      {@html icon}
      {label} Settings
    </div>
    
    <div class="color-section">
      <div class="section-label">Color</div>
      <div class="swatches">
        {#each colors as color, i}
          <button class="swatch s-{color}" class:selected={i === 0} aria-label={color}></button>
        {/each}
      </div>
    </div>
    
    <div class="thickness-section">
      <div class="section-label">Thickness</div>
      <div class="thickness-controls">
        <input class="thick-range" type="range" min="1" max={maxThickness} value={defaultThickness}>
        <input class="thick-number" type="number" min="1" max={maxThickness} value={defaultThickness}>
      </div>
    </div>
  </div>
</div>

<style>
  .tool-slot {
    position: relative;
    width: 100%;
    height: 72px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  .tool {
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
  
  .tool:hover {
    background: rgba(255,255,255,0.12);
    border-color: rgba(255,255,255,0.1);
    transform: translateY(-1px);
  }

  .tool-radio { display: none; }

  .tool-radio:checked + .tool {
    background: linear-gradient(135deg, rgba(91,156,255,0.25), rgba(91,156,255,0.15));
    border-color: rgba(91,156,255,0.4);
    box-shadow: 
      0 0 0 1px rgba(91,156,255,0.3),
      0 4px 12px rgba(91,156,255,0.2);
  }

  .settings-btn {
    width: 48px;
    height: 20px;
    border-radius: 10px;
    border: 1px solid rgba(255,255,255,0.16);
    background: rgba(255,255,255,0.08);
    color: #9aa4b2;
    cursor: pointer;
    opacity: 0;
    pointer-events: none;
    transition: all 200ms ease;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 11px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }

  .tool-radio:checked ~ .settings-btn {
    opacity: 1;
    pointer-events: auto;
    border-color: rgba(91,156,255,0.4);
    color: #e6edf3;
  }

  .tool-radio:checked ~ .settings-btn:hover {
    background: rgba(91,156,255,0.15);
    border-color: rgba(91,156,255,0.6);
  }

  .menu-toggle { display: none; }
  
  .settings-popover {
    position: absolute;
    left: calc(100% + 16px);
    top: 0;
    width: 280px;
    padding: 16px;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(255,255,255,0.12), rgba(255,255,255,0.08));
    border: 1px solid rgba(255,255,255,0.16);
    box-shadow: 0 8px 24px rgba(0,0,0,0.35);
    display: grid;
    gap: 16px;
    opacity: 0;
    pointer-events: none;
    transition: all 200ms ease;
    z-index: 25;
  }

  .settings-popover::before {
    content: '';
    position: absolute;
    left: -8px;
    top: 24px;
    width: 0;
    height: 0;
    border-top: 8px solid transparent;
    border-bottom: 8px solid transparent;
    border-right: 8px solid rgba(255,255,255,0.1);
  }

  .menu-toggle:checked ~ .settings-popover {
    opacity: 1;
    pointer-events: auto;
  }

  .settings-header {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #e6edf3;
    font-weight: 600;
    font-size: 13px;
  }

  .color-section, .thickness-section {
    display: grid;
    gap: 12px;
  }

  .section-label {
    font-size: 11px;
    color: #9aa4b2;
    text-transform: uppercase;
    letter-spacing: 0.8px;
    font-weight: 600;
  }

  .swatches {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
  }

  .swatch {
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 2px solid rgba(0,0,0,0.3);
    cursor: pointer;
    transition: transform 150ms ease;
    position: relative;
  }
  
  .swatch:hover {
    transform: scale(1.1);
  }
  
  .swatch.selected::after {
    content: '';
    position: absolute;
    inset: -3px;
    border: 2px solid #5b9cff;
    border-radius: 10px;
  }

  .swatch.s-black { background:#1a1d23; }
  .swatch.s-blue  { background:#5b9cff; }
  .swatch.s-red   { background:#ff6b6b; }
  .swatch.s-green { background:#2ecc71; }
  .swatch.s-purple{ background:#9b7bff; }
  .swatch.s-brown { background:#b0723b; }
  .swatch.s-cyan  { background:#4fd1c5; }
  .swatch.s-gray  { background:#9aa4b2; }
  .swatch.s-yellow{ background:#ffd166; }
  .swatch.s-lime  { background:#a8ff60; }
  .swatch.s-pink  { background:#ff7eb6; }
  .swatch.s-orange{ background:#ff9f40; }

  .thickness-controls {
    display: grid;
    grid-template-columns: 1fr 60px;
    gap: 12px;
    align-items: center;
  }

  .thick-range {
    -webkit-appearance: none;
    appearance: none;
    height: 6px;
    border-radius: 999px;
    background: rgba(255,255,255,0.15);
    outline: none;
  }
  
  .thick-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #5b9cff;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }

  .thick-number {
    width: 60px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.16);
    background: rgba(255,255,255,0.08);
    color: #e6edf3;
    padding: 0 8px;
    text-align: center;
    font-weight: 600;
    outline: none;
  }

  :global(.tool-slot .icon) {
    width: 20px;
    height: 20px;
    stroke: currentColor;
    fill: none;
    stroke-width: 2;
    vector-effect: non-scaling-stroke;
  }

  :global(.settings-header .icon) {
    width: 16px;
    height: 16px;
  }
</style>
