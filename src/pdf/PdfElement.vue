<script setup lang="ts">
import { Viewport } from '@embedpdf/plugin-viewport/vue';
import { Scroller } from '@embedpdf/plugin-scroll/vue';
import { RenderLayer } from '@embedpdf/plugin-render/vue';
import { AnnotationLayer } from '@embedpdf/plugin-annotation/vue';
import { PagePointerProvider } from '@embedpdf/plugin-interaction-manager/vue';

</script>


<template>
      <Viewport class="viewport-class">
        <Scroller>
          <template #default="{ page }">
            <PagePointerProvider
              :page-index="page.pageIndex"
              :page-width="page.width"
              :page-height="page.height"
              :rotation="page.rotation"
              :scale="page.scale"
            >
              <RenderLayer :pageIndex="page.pageIndex" />
              <AnnotationLayer
                :page-index="page.pageIndex"
                :scale="page.scale"
                :page-width="page.width"
                :page-height="page.height"
                :rotation="page.rotation"
              />
            </PagePointerProvider>
          </template>
        </Scroller>
      </Viewport>
</template>