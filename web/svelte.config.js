import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-vercel';
//  import glory from './src/cssRenderer';
//  console.log('check glory in config.js', glory.raw)

const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
        replace: [[ 'process.env.NODE_ENV', "production" ]],
    }),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
        adapter: adapter()
	}
};

export default config;
