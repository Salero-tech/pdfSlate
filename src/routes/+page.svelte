<script lang="ts">
    import CoreViewer from '../lib/pdf/CoreViewer.svelte';

</script>

<main class="container">
  <CoreViewer />
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
    background-color: #3a3838;
    box-sizing: border-box;
    overflow: hidden; /* Prevent children from overflowing */
  }
</style>