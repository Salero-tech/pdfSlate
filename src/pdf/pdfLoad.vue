<script setup lang="ts">
import { useLoaderCapability } from '@embedpdf/plugin-loader/vue';
import { FilePicker } from '@embedpdf/plugin-loader/vue';


const { provides: loaderProvides } = useLoaderCapability();

function openFilePicker() {
  loaderProvides.value?.openFileDialog();
}

</script>

<template>
    <button @click="openFilePicker">Open PDF</button>
    <FilePicker />
</template>