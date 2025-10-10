<script setup lang="ts">
import { usePdfiumEngine } from '@embedpdf/engines/vue';
import { EmbedPDF } from '@embedpdf/core/vue';
import { createPluginRegistration } from '@embedpdf/core';

// Import the essential plugins and their components
import { ViewportPluginPackage, Viewport } from '@embedpdf/plugin-viewport/vue';
import { Scroller, ScrollPluginPackage } from '@embedpdf/plugin-scroll/vue';
import { LoaderPluginPackage } from '@embedpdf/plugin-loader/vue';
import { RenderLayer, RenderPluginPackage } from '@embedpdf/plugin-render/vue';

// 1. Initialize the engine with the Vue composable
const { engine, isLoading } = usePdfiumEngine();

// 2. Register the plugins you need
const plugins = [
  createPluginRegistration(LoaderPluginPackage, {
    loadingOptions: {
      type: 'url',
      pdfFile: {
        id: 'example-pdf',
        url: 'https://snippet.embedpdf.com/ebook.pdf',
      },
    },
  }),
  createPluginRegistration(ViewportPluginPackage),
  createPluginRegistration(ScrollPluginPackage),
  createPluginRegistration(RenderPluginPackage),
];
</script>

<template>
  <div>
    <div v-if="isLoading || !engine" class="loading-pane">
      Loading PDF Engine...
    </div>
    
    <EmbedPDF v-else :engine="engine" :plugins="plugins">
      <Viewport class="viewport-class">
        <Scroller>
          <template #default="{ page }">
            <div
              :style="{
                width: `${page.width}px`,
                height: `${page.height}px`,
              }"
            >
              <RenderLayer :pageIndex="page.pageIndex" />
            </div>
          </template>
        </Scroller>
      </Viewport>
    </EmbedPDF>
  </div>
</template>

<style scoped>
.viewport-class {
  overflow: auto;
}
</style>