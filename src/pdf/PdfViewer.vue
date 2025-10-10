<script setup lang="ts">
import { usePdfiumEngine } from '@embedpdf/engines/vue';
import { EmbedPDF } from '@embedpdf/core/vue';
import { createPluginRegistration } from '@embedpdf/core';


// Import the essential plugins and their components
import { ViewportPluginPackage } from '@embedpdf/plugin-viewport/vue';
import { ScrollPluginPackage } from '@embedpdf/plugin-scroll/vue';
import { LoaderPluginPackage } from '@embedpdf/plugin-loader/vue';
import { RenderPluginPackage } from '@embedpdf/plugin-render/vue';
import { AnnotationPluginPackage } from '@embedpdf/plugin-annotation/vue';
import { InteractionManagerPluginPackage } from '@embedpdf/plugin-interaction-manager/vue'
import { SelectionPluginPackage } from '@embedpdf/plugin-selection/vue'
import { HistoryPluginPackage } from '@embedpdf/plugin-history/vue'
import { ExportPluginPackage } from '@embedpdf/plugin-export/vue'
import PdfElement from './PdfElement.vue';
import PdfLoad from './pdfLoad.vue';


const { engine, isLoading } = usePdfiumEngine();

const plugins = [
  createPluginRegistration(LoaderPluginPackage),
  createPluginRegistration(ViewportPluginPackage),
  createPluginRegistration(ScrollPluginPackage),
  createPluginRegistration(RenderPluginPackage),
  // Register dependencies first
  createPluginRegistration(InteractionManagerPluginPackage),
  createPluginRegistration(SelectionPluginPackage),
  createPluginRegistration(HistoryPluginPackage),
  createPluginRegistration(AnnotationPluginPackage, {
    annotationAuthor: 'pdfSlate',
    autoCommit: true,
    selectAfterCreate: false,
  }),
  createPluginRegistration(ExportPluginPackage, {
    defaultFileName: 'my-document.pdf',
  }),
];




</script>

<template>
  <div>
    <div v-if="isLoading || !engine" class="loading-pane">
      Loading PDF Engine...
    </div>
    <EmbedPDF v-else :engine="engine" :plugins="plugins">
      <PdfLoad />
      <PdfElement />
    </EmbedPDF>
  </div>
</template>

<style scoped>
.viewport-class {
  overflow: auto;
}
</style>