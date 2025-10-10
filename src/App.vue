<script setup lang="ts">
import PdfViewer from './pdf/PdfViewer.vue'
import Toolbar from './toolbar/toolbar.vue';
</script>

<template>
  <PdfViewer class="pdfViewer"/>
</template>

<style>
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

#app {
  height: 100vh;
  width: 100%;
  position: relative;
  display: flex;
}

/* Prevent image dragging globally */
img {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
  pointer-events: none;
}

/* Prevent text selection and dragging */
* {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-touch-callout: none;
}

/* Prevent dragging of any elements */
* {
  -webkit-user-drag: none;
  -khtml-user-drag: none;
  -moz-user-drag: none;
  -o-user-drag: none;
}
</style>

<style scoped>
.pdfViewer {
  flex: 1;
  height: 100%;
  overflow: hidden;
}

.toolbar {
  position: fixed;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
}
</style>