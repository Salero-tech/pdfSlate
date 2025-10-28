<script lang="ts">
    import { open } from '@tauri-apps/plugin-dialog';
    import { readFile, writeFile } from '@tauri-apps/plugin-fs';
    import { isWeb } from './platform';


    const { onFileSelectedCallback } = $props()

    function openFile() {
        if (isWeb) {
            openFileWeb();
        } else {
            openFileTauri();
        }
    }

    async function openFileTauri() {
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

    async function openFileWeb() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'application/pdf';
        input.onchange = async (e: Event) => {
            const target = e.target as HTMLInputElement;
            if (target.files && target.files.length > 0) {
                const file = target.files[0];
                const arrayBuffer = await file.arrayBuffer();
                onFileSelectedCallback(arrayBuffer);
            }
        };
        input.click();
    }

</script>


<button onclick={openFile} class="select-button">
    Select PDF File
</button>