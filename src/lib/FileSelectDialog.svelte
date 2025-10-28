<script lang="ts">
    import { open } from '@tauri-apps/plugin-dialog';
    import { readFile } from '@tauri-apps/plugin-fs';


    const { onFileSelectedCallback } = $props()


    async function openFile() {
        const file = await open({
        multiple: false,
        directory: false,
        filters: [
            {
            name: 'PDF File',
            extensions: ['pdf'],
            },
        ],
        });
        const content = await readFile(file!);

        onFileSelectedCallback(content.buffer);
    }

</script>


<button onclick={openFile} class="select-button">
    Select PDF File
</button>