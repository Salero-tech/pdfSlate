<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { useAnnotationCapability } from '@embedpdf/plugin-annotation/vue';
 
const { provides: annotationApi } = useAnnotationCapability();
const activeTool = ref<string | null>(null);
const canDelete = ref(false);
 
let unsub1: () => void;
let unsub2: () => void;
 
onMounted(() => {
  if (!annotationApi.value) return;
  unsub1 = annotationApi.value.onActiveToolChange(tool => (activeTool.value = tool?.id ?? null));
  unsub2 = annotationApi.value.onStateChange(state => (canDelete.value = !!state.selectedUid));
});
 
onUnmounted(() => {
  unsub1?.();
  unsub2?.();
});
 
const setActiveTool = (toolId: string) => {
  annotationApi.value?.setActiveTool(activeTool.value === toolId ? null : toolId);
}
</script>
<template>
  <div>
    <button @click="setActiveTool('highlight')">Highlighter</button>
    <button @click="setActiveTool('ink')">Pen</button>
  </div>
</template>