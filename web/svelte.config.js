import sveltePreprocess from 'svelte-preprocess';
import { preprocess } from 'svelte/compiler';
import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import viteImage from 'vite-imagetools';
import path from 'path';

const config = {
	extensions: ['.svelte', '.md', '.svelte.md'],
	preprocess: [
		mdsvex({
			extensions: ['.svelte.md', '.md', '.svelte'],
			layout: {
				article: './src/lib/Article.svelte'
			}
		}),
		sveltePreprocess()
	],
	kit: {
		target: '#svelte',
		adapter: adapter(),
		vite: {
			build: {
				minify: true
			},
			resolve: {
				alias: {
					$static: path.resolve('static')
				}
			},
			plugins: [viteImage.imagetools({ force: true })]
		}
	}
};

export default config;
