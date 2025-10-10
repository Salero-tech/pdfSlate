<script setup lang="ts">
import { ref } from 'vue'

const selectedTool = ref('hand')

const selectTool = (tool: string) => {
  selectedTool.value = tool
  console.log(`Selected tool: ${tool}`)
}
</script>

<template>
  <div class="toolbar">
    <!-- Hand Tool (Pan) -->
    <button 
      class="toolbar-btn" 
      :class="{ active: selectedTool === 'hand' }"
      @click="selectTool('hand')" 
      title="Hand Tool (Pan)">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7,2A2,2 0 0,1 9,4V8.5L10.5,7.5C11.19,7 12.18,7.13 12.69,7.81C13.19,8.5 13.06,9.5 12.38,10L10.5,11.5V16.5C10.5,17.88 9.38,19 8,19H4.5C3.12,19 2,17.88 2,16.5V10C2,8.62 3.12,7.5 4.5,7.5H5V4A2,2 0 0,1 7,2M7,4V16H8.5V9.5L12.38,7C12.38,7 12.38,7 12.38,7L10.5,8.5V4H7M19,2A2,2 0 0,1 21,4V16A2,2 0 0,1 19,18H15.5V16H19V4H17.5V8.5L15.62,7C15.62,7 15.62,7 15.62,7L19.5,9.5V16.5H21V10C21,8.62 19.88,7.5 18.5,7.5H18V4A2,2 0 0,1 19,2Z"/>
      </svg>
    </button>

    <div class="toolbar-divider"></div>

    <!-- Pen Tool -->
    <button 
      class="toolbar-btn" 
      :class="{ active: selectedTool === 'pen' }"
      @click="selectTool('pen')" 
      title="Pen Tool">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.84,2.73C16.45,2.73 16.07,2.88 15.77,3.17L13.65,5.29L18.95,10.6L21.07,8.5C21.67,7.89 21.67,6.94 21.07,6.36L17.9,3.17C17.6,2.88 17.22,2.73 16.84,2.73M12.94,6L4.84,14.11L7.4,14.39L7.58,16.68L9.86,16.85L10.15,19.41L18.25,11.3M4.25,15.04L2.5,21.73L9.2,19.94L8.96,17.78L6.65,17.61L6.47,15.29" fill="#E74C3C"/>
      </svg>
    </button>

    <div class="toolbar-divider"></div>

    <!-- Yellow Highlighter -->
    <button 
      class="toolbar-btn" 
      :class="{ active: selectedTool === 'highlighter-yellow' }"
      @click="selectTool('highlighter-yellow')" 
      title="Yellow Highlighter">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.5,1.15C18.97,1.15 19.4,1.32 19.72,1.63L22.37,4.28C22.68,4.6 22.85,5.03 22.85,5.5C22.85,5.97 22.68,6.4 22.37,6.72L11.72,17.37C11.4,17.68 10.97,17.85 10.5,17.85C10.03,17.85 9.6,17.68 9.28,17.37L6.63,14.72C6.32,14.4 6.15,13.97 6.15,13.5C6.15,13.03 6.32,12.6 6.63,12.28L17.28,1.63C17.6,1.32 18.03,1.15 18.5,1.15M18.5,3.15L8.5,13.15L10.85,15.5L20.85,5.5L18.5,3.15M2,20V22H22V20H2Z" fill="#FFD700"/>
      </svg>
    </button>

    <!-- Green Highlighter -->
    <button 
      class="toolbar-btn" 
      :class="{ active: selectedTool === 'highlighter-green' }"
      @click="selectTool('highlighter-green')" 
      title="Green Highlighter">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.5,1.15C18.97,1.15 19.4,1.32 19.72,1.63L22.37,4.28C22.68,4.6 22.85,5.03 22.85,5.5C22.85,5.97 22.68,6.4 22.37,6.72L11.72,17.37C11.4,17.68 10.97,17.85 10.5,17.85C10.03,17.85 9.6,17.68 9.28,17.37L6.63,14.72C6.32,14.4 6.15,13.97 6.15,13.5C6.15,13.03 6.32,12.6 6.63,12.28L17.28,1.63C17.6,1.32 18.03,1.15 18.5,1.15M18.5,3.15L8.5,13.15L10.85,15.5L20.85,5.5L18.5,3.15M2,20V22H22V20H2Z" fill="#32CD32"/>
      </svg>
    </button>

    <!-- Pink Highlighter -->
    <button 
      class="toolbar-btn" 
      :class="{ active: selectedTool === 'highlighter-pink' }"
      @click="selectTool('highlighter-pink')" 
      title="Pink Highlighter">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.5,1.15C18.97,1.15 19.4,1.32 19.72,1.63L22.37,4.28C22.68,4.6 22.85,5.03 22.85,5.5C22.85,5.97 22.68,6.4 22.37,6.72L11.72,17.37C11.4,17.68 10.97,17.85 10.5,17.85C10.03,17.85 9.6,17.68 9.28,17.37L6.63,14.72C6.32,14.4 6.15,13.97 6.15,13.5C6.15,13.03 6.32,12.6 6.63,12.28L17.28,1.63C17.6,1.32 18.03,1.15 18.5,1.15M18.5,3.15L8.5,13.15L10.85,15.5L20.85,5.5L18.5,3.15M2,20V22H22V20H2Z" fill="#FF69B4"/>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.toolbar {
  background-color: #2c3e50;
  color: white;
  padding: 12px 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
  border-top: 1px solid #34495e;
  min-height: 60px;
  align-items: center;
}

.toolbar-btn {
  background-color: #34495e;
  border: none;
  color: white;
  padding: 8px;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
}

.toolbar-btn:hover {
  background-color: #4a6074;
  transform: scale(1.05);
}

.toolbar-btn.active {
  background-color: #3498db;
  box-shadow: 0 0 8px rgba(52, 152, 219, 0.4);
}

.toolbar-btn:active {
  transform: scale(0.95);
}

.toolbar-divider {
  height: 1px;
  background-color: #34495e;
  width: 30px;
  margin: 4px 0;
}
</style>