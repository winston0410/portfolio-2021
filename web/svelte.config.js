import sveltePreprocess from 'svelte-preprocess';
import { preprocess } from 'svelte/compiler';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
//  import image from "svelte-image";

const config = {
	extensions: ['.svelte', '.md', '.svelte.md'],
	preprocess: [
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svelte'],
			layout: {
				article: './src/lib/Article.svelte'
			}
		}),
		sveltePreprocess(),
        //  image()
	],

	kit: {
		target: '#svelte',
		adapter: adapter()
	}
};

export default config;
