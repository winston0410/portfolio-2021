import sveltePreprocess from 'svelte-preprocess';
import { preprocess } from 'svelte/compiler'
//  import adapter from '@sveltejs/adapter-vercel'
import adapter from '@sveltejs/adapter-static';
//  import gloryPreprocess from "glory-svelte-preprocess";

const config = {
	preprocess: [
		{
			async markup({ content, filename }) {
				return preprocess(content, [sveltePreprocess()], { filename });
			}
		},
		//  gloryPreprocess({
            //  lazyLoad: true
        //  })
	],

	kit: {
		target: '#svelte',
		adapter: adapter()
	}
};

export default config;
