<script lang="ts">
    import FileSelectDialog from '$lib/FileSelectDialog.svelte';
    import CoreViewer from '../lib/pdf/CoreViewer.svelte';
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
</main>


<style>
  :global(html, body) {
    height: 100%;
    margin: 0;
    padding: 0;
    background-color: #3a3838;
  }

  .container {
    display: flex;
    height: 100vh;
    width: 100vw;
    justify-content: center;
    align-items: center;
    background-color: #3a3838;
    box-sizing: border-box;
    overflow: hidden; /* Prevent children from overflowing */
  }
</style>