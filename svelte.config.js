import adapter from '@sveltejs/adapter-auto';
// import nodeAdapter from "@sveltejs/adapter-node";
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://kit.svelte.dev/docs/integrations#preprocessors
    // for more information about preprocessors
    preprocess: vitePreprocess(),

    kit: {
        // adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
        // If your environment is not supported or you settled on a specific environment, switch out the adapter.
        // See https://kit.svelte.dev/docs/adapters for more information about adapters.
        adapter: adapter(),
        // adapter: nodeAdapter(),

        // this wasn't here I've added to remember this is the way I can change the default folder configs
        files: {
            routes: 'src/routes',
            lib: 'src/lib',
        },

        // define custom aliases for folders
        alias: {
            $components: 'src/lib/components',
        },

        // in case it needs to be changed, it's in here
        env: {
            publicPrefix: "PUBLIC_"
        }
    }
};

export default config;
