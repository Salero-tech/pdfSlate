<script lang="ts">
    import { useExportCapability } from "@embedpdf/plugin-export/svelte";
    import { isWeb } from "$lib/platform";
    import { writeFile, BaseDirectory, create } from "@tauri-apps/plugin-fs";

    const exportApi = useExportCapability();

    async function saveChanges() {
        if (!isWeb) {
            await saveChangesTauri();
        } else {
            exportApi.provides?.download();
        }
    }

    async function saveChangesTauri() {
        if (exportApi.provides) {
            const buffer = await exportApi.provides.saveAsCopy().toPromise();
            const file = await create("output.pdf", {
                baseDir: BaseDirectory.AppData,
            });
            await file.write(new Uint8Array(buffer));
            file.close();
        } else {
            console.error("Export capability is not available.");
        }
    }
</script>

<button onclick={saveChanges}> save </button>
