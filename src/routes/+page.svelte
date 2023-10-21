<script lang="ts">
    import './style.css';
    import Toast, { toast } from '$lib';
    import Instructions from './Instructions.svelte';

    export let data;
</script>

<Toast position="top-right" />
<main
    class="py-12 md:max-w-3xl mx-auto items-center justify-center text-center min-h-screen"
>
    <div class="m-8 space-y-8">
        <div class="space-y-4">
            <div>
                <h1 class="text-5xl font-semibold mb-2">svelte-daisy-toast</h1>
                <p class="text-gray-400 text-lg">
                    Version {data.info.version}
                </p>
            </div>
            <p class="text-gray-400 text-3xl">
                Simple, beautiful toasts in Svelte with DaisyUI.
            </p>
            <button
                class="btn btn-primary"
                on:click={() =>
                    toast({
                        title: data.info.name,
                        message: `Version ${data.info.version}`,
                        type: 'info'
                    })}>Toast</button
            >
        </div>

        <Instructions {data} />

        <div class="space-y-2 space-x-2 grid grid-cols-2 md:grid-cols-3">
            <button
                class="mt-2 ml-2 btn btn-info"
                on:click={() =>
                    toast({
                        title: data.info.name,
                        message: `Version ${data.info.version}`,
                        type: 'info'
                    })}>Info</button
            >
            <button
                class="btn btn-success"
                on:click={() =>
                    toast({
                        message: 'Hello World',
                        type: 'success'
                    })}>Success</button
            >
            <button
                class="btn btn-warning"
                on:click={() =>
                    toast({
                        message: 'Hello World',
                        type: 'warning'
                    })}>Warning</button
            >

            <button
                class="btn btn-error"
                on:click={() =>
                    toast({
                        message: 'Hello World',
                        type: 'error'
                    })}>Error</button
            >
            <button
                class="btn btn-secondary"
                on:click={() =>
                    toast({
                        message: 'Hello World',
                        type: null
                    })}>Other</button
            >
            <button
                class="btn btn-info"
                on:click={() =>
                    toast({
                        message: "You can't close me",
                        duration: 3000,
                        closable: false
                    })}>Not closable</button
            >
            <button
                class="btn btn-info"
                on:click={() =>
                    toast({
                        message: 'I only go away if you close me',
                        duration: null
                    })}>No Duration</button
            >
            <button
                class="btn btn-info"
                on:click={() =>
                    toast({
                        title: 'Title',
                        message: 'Message',
                        duration: null
                    })}>Title</button
            >
            <button
                class="btn btn-info"
                on:click={() =>
                    toast({
                        message:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                        duration: null
                    })}>Long</button
            >
            <button
                class="btn btn-info"
                on:click={() =>
                    toast({
                        message: 'Line 1\nLine 2\n\tLine 3',
                        duration: null
                    })}>Multi-line</button
            >
            <button
                class="btn btn-info"
                on:click={() =>
                    toast({
                        message:
                            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus in ornare quam viverra orci sagittis eu. Vulputate sapien nec sagittis aliquam malesuada. Tincidunt eget nullam non nisi est sit amet facilisis. Elementum integer enim neque volutpat ac tincidunt. Duis at tellus at urna condimentum mattis pellentesque id. Semper quis lectus nulla at volutpat diam ut venenatis. Tristique senectus et netus et malesuada fames ac turpis egestas. Egestas congue quisque egestas diam in arcu. Nascetur ridiculus mus mauris vitae ultricies leo. Sit amet luctus venenatis lectus magna fringilla. Venenatis urna cursus eget nunc scelerisque. At risus viverra adipiscing at in tellus integer feugiat. Mauris pellentesque pulvinar pellentesque habitant morbi tristique. Magnis dis parturient montes nascetur ridiculus.',
                        duration: null
                    })}>Super Long</button
            >
        </div>
    </div>
</main>
