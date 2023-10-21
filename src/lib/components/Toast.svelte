<script lang="ts">
    import { toasts } from '$lib/store.js';
    import { close } from '$lib/toast.js';
    import type { Toast } from '$lib/types';
    import Info from './icons/Info.svelte';
    import Success from './icons/Success.svelte';
    import Warning from './icons/Warning.svelte';
    import Error from './icons/Error.svelte';

    const TOAST_TYPES = {
        info: {
            class: 'alert-info',
            icon: Info
        },
        success: {
            class: 'alert-success',
            icon: Success
        },
        warning: {
            class: 'alert-warning',
            icon: Warning
        },
        error: {
            class: 'alert-error',
            icon: Error
        }
    };

    let history: Toast[] = [];

    toasts.subscribe((t) => {
        history = history.filter((h) => t.some((t) => t.id === h.id));

        // Get items not already in history
        const newToasts = t.filter((t) => !history.some((h) => h.id === t.id));

        // Add new items
        newToasts.forEach((toast) => {
            history.push(toast);

            if (!toast.duration) return;

            setTimeout(() => {
                close(toast.id);
            }, toast.duration);
        });
    });

    export let position:
        | 'top-start'
        | 'top-center'
        | 'top-end'
        | 'middle-start'
        | 'middle-center'
        | 'middle-end'
        | 'bottom-start'
        | 'bottom-center'
        | 'bottom-end' = 'top-center';
</script>

<div
    class="toast toast-{position.split('-')[0]} toast-{position.split('-')[1]}"
>
    {#each $toasts as toast, i}
        <div
            class="max-w-sm alert whitespace-normal {toast.type
                ? TOAST_TYPES[toast.type].class
                : ''}"
        >
            {#if toast.type}
                <svelte:component this={TOAST_TYPES[toast.type].icon} />
            {:else}
                <div />
            {/if}
            <div>
                {#if toast.title}
                    <h3 class="font-bold">{toast.title}</h3>
                {/if}

                <span class={toast.title ? 'text-sm' : ''}>
                    {#each (toast.message ?? '').split('\n') as line}
                        {line}<br />
                    {/each}
                </span>
            </div>
            {#if toast.closable}
                <button
                    class="btn btn-sm btn-circle btn-ghost"
                    on:click={() => close(toast.id)}
                    on:keydown={() => close(toast.id)}>✕</button
                >
            {/if}
        </div>
    {/each}
</div>
