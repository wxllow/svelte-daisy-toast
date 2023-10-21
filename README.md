# svelte-daisy-toast

Simple, beautiful toasts in [Svelte](https://svelte.dev/), with
[DaisyUI](https://daisyui.com/).

## Demo

[Demo](https://wxllow.github.io/svelte-daisy-toast/)

## Getting Started

**Make sure you have [Tailwind](https://tailwindcss.com/docs/guides/sveltekit)
and [DaisyUI](https://daisyui.com/docs/install/) set up in your project.**

### 1. Install

```bash
bun add svelte-daisy-toast
```

### 2. Add to Tailwind config

Modify your `tailwind.config.js` to add `svelte-daisy-toast`, otherwise Tailwind will tree-shake the "unused" styles!

```diff
/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './src/**/*.{html,js,svelte,ts}',
+       './node_modules/svelte-daisy-toast/dist/**/*.{js,svelte}'
    ],
    theme: {
        extend: {}
    },
    plugins: [require('daisyui')]
};
```

### 3. Add to layout

```svelte
<!-- +layout.svelte -->
<script>
    import Toast from 'svelte-daisy-toast';
</script>

<Toast position="bottom-center" />
<slot />
```

### 4. Use

```svelte
<!-- +page.svelte -->
<script>
    import { toast } from 'svelte-daisy-toast';

    function boop() {
        toast({
            title: 'Boop',
            message: 'Hello Svelte!',
            duration: 5000,
            type: 'success'
        });
    }
</script>

<button class="btn" on:click={boop}>I'm a button</button>
```

## Usage

### Add to site

Simply `<Toast />` to your layout or page.

```svelte
<script>
    import Toast from 'svelte-daisy-toast';
</script>

<Toast position="bottom-center" />
<slot />
```

Your position can be `top-start`, `top-center`, `top-end`, `bottom-start`,
`bottom-center`, `bottom-end`, `middle-start`, `middle-center`, or
`middle-end`. The default is `top-center`.

### Create toasts

```ts
import { toast } from 'svelte-daisy-toast';

toast({
    title: '',
    message: '',
    duration: 5000,
    closable: true,
    type = 'info'
});
```

### Close a toast programmatically

```ts
import { toast, close } from 'svelte-daisy-toast';

const myToast = toast({
    title: '',
    message: '',
    duration: 5000,
    closable: true,
    type = 'info'
});

close(toast);
```

## Credits/Inspiration

Possible thanks to

- [Svelte](https://svelte.dev/)
- [Tailwind](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

Inspiration from

- [Svelte French Toast](https://svelte-french-toast.com/)
- [ChakraUI Toast Component](https://chakra-ui.com/toast)
