<script lang="ts">
    import { usePdfiumEngine } from "@embedpdf/engines/svelte";
    import { EmbedPDF } from "@embedpdf/core/svelte";
    import { createPluginRegistration } from "@embedpdf/core";
    import { ZoomPluginPackage } from "@embedpdf/plugin-zoom";
    import {
        TilingPluginPackage,
        TilingLayer,
    } from "@embedpdf/plugin-tiling/svelte";
    // Import the essential plugins and their components
    import {
        ViewportPluginPackage,
        Viewport,
    } from "@embedpdf/plugin-viewport/svelte";
    import {
        Scroller,
        ScrollPluginPackage,
        type RenderPageProps,
    } from "@embedpdf/plugin-scroll/svelte";
    import { LoaderPluginPackage } from "@embedpdf/plugin-loader/svelte";
    import {
        RenderLayer,
        RenderPluginPackage,
    } from "@embedpdf/plugin-render/svelte";
    //components
    import ZoomControlls from "./ZoomControlls.svelte";

    const { file } = $props();

    // 1. Initialize the engine with the Svelte store
    const pdfEngine = usePdfiumEngine();

    // 2. Register the plugins you need
    const plugins = [
        createPluginRegistration(LoaderPluginPackage, {
            loadingOptions: {
                type: "buffer",
                pdfFile: {
                    id: Math.random().toString(36).substring(2, 15),
                    name: "test.pdf",
                    content: file,
                },
            },
        }),
        createPluginRegistration(ViewportPluginPackage),
        createPluginRegistration(ScrollPluginPackage),
        createPluginRegistration(RenderPluginPackage),
        //non essential
        createPluginRegistration(ZoomPluginPackage),
        // good quality
        createPluginRegistration(TilingPluginPackage, {
            tileSize: 768,
            overlapPx: 5,
            extraRings: 1, // Pre-render one ring of tiles outside the viewport
        }),
    ];
</script>

{#snippet RenderPageSnippet(page: RenderPageProps)}
    <div
        style:width={`${page.width}px`}
        style:height={`${page.height}px`}
        style:position="relative"
    >
        <!-- 1. Low-resolution base layer for immediate feedback -->
        <RenderLayer pageIndex={page.pageIndex} scale={1} />
        <!-- 2. High-resolution tile layer on top -->
        <TilingLayer pageIndex={page.pageIndex} scale={page.scale} />
    </div>
{/snippet}

{#if pdfEngine.isLoading || !pdfEngine.engine}
    <div class="loading-pane">Loading PDF Engine...</div>
{:else}
    <EmbedPDF engine={pdfEngine.engine} {plugins}>
        <ZoomControlls />
        <Viewport class="viewport-class">
            <Scroller {RenderPageSnippet} />
        </Viewport>
    </EmbedPDF>
{/if}

<style>
    .loading-pane {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .viewport-class {
        background-color: #f1f3f5;
        height: 100%;
        width: 100%;
    }
</style>
