import { name, version } from '../../package.json';

export const prerender = true;

import { getHighlighter, renderToHtml } from 'shiki';

export async function load() {
    const code1 = `<!-- +layout.svelte -->
<script>
    import Toast from 'svelte-daisy-toast';
</script>

<Toast position="bottom-center" />
<slot />`;

    const code2 = `<!-- +page.svelte -->
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

<button class="btn" on:click={boop}>I'm a button</button>`;

    const highlighter = await getHighlighter({
        theme: 'github-dark',
        langs: ['svelte']
    });

    const htmlOpts = {
        elements: {
            pre({ className, children }) {
                return `<pre class="${className} rounded-xl p-8 text-left bg-[#24292e] overflow-x-auto" tabindex="0">${children}</pre>`;
            }
        }
    };

    return {
        info: {
            name,
            version
        },
        code1: renderToHtml(
            highlighter.codeToThemedTokens(code1, 'svelte', 'github-dark'),
            htmlOpts
        ),
        code2: renderToHtml(
            highlighter.codeToThemedTokens(code2, 'svelte', 'github-dark'),
            htmlOpts
        )
    };
}
