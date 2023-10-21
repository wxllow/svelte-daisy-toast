<script lang="ts">
    let installTab = 0;
    const installTabs = [
        {
            name: 'bun',
            command: 'bun add svelte-daisy-toast'
        },
        {
            name: 'pnpm',
            command: 'pnpm install svelte-daisy-toast'
        },

        {
            name: 'yarn',
            command: 'yarn add svelte-daisy-toast'
        },
        {
            name: 'npm',
            command: 'npm install svelte-daisy-toast'
        }
    ];

    export let data: {
        code1: string;
        code2: string;
        info: {
            name: string;
            version: string;
        };
    };
</script>

<div class="text-left space-y-4 items-left">
    <h2 class="text-2xl">1. Install</h2>
    <div class="max-w-sm mx-auto">
        <div class="tabs tabs-boxed rounded-b-none">
            {#each installTabs as tab, i}
                <button
                    class="tab {installTab === i ? 'tab-active' : ''}"
                    on:click={() => (installTab = i)}>{tab.name}</button
                >
            {/each}
        </div>

        <pre
            class="rounded-xl p-8 text-left bg-[#24292e] overflow-x-auto">{installTabs[
                installTab
            ].command}</pre>
    </div>
    <h2 class="text-2xl">2. Add to layout</h2>
    <div class="shiki hidden" />
    {@html data.code1}
    <h2 class="text-2xl">3. Use</h2>
    {@html data.code2}
</div>
