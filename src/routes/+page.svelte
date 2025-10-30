<script lang="ts">
    import FileSelectDialog from '$lib/FileSelectDialog.svelte';
    import CoreViewer from '../lib/pdf/CoreViewer.svelte';
    import ZoomControls from '$lib/ui/zoomControls.svelte';
    let file: ArrayBuffer | null = null;

    function handleFileSelected(url: ArrayBuffer) {
        file = url;
    }
</script>

<main class="container">
  {#if !file}
    <FileSelectDialog onFileSelectedCallback={handleFileSelected} />
  {:else}
    <CoreViewer {file} />
  {/if}
  <ZoomControls />
</main>


<style>
  :global(html, body) {
    height: 100dvh;
    margin: 0;
    padding: 0;
    background-color: #0d1117;
  }

  .container {
    display: flex;
    height: 100dvh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    overflow: hidden; /* Prevent children from overflowing */
  }
</style>