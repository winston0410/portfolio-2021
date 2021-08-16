import sveltePreprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
//  import adapter from '@sveltejs/adapter-static';

const config = {
	preprocess: [
		sveltePreprocess({
			defaults: {
				style: 'postcss'
			},
			replace: [['process.env.NODE_ENV', 'production']],
			postcss: true
		})
	],

	kit: {
		target: '#svelte',
		adapter: adapter()
	}
};

export default config;
