<script context="module" lang="ts">
	import { isMenuActive } from '$lib/store';
	import { onMount } from 'svelte';
	import Heading from '$lib/Heading.svelte';
	import MetaData from '$lib/MetaData.svelte';
	import env from '$lib/env';
	import { page } from '$app/stores';
	import type { IProject } from '$lib/typing';

	//  export const load = async ({ fetch }) => {
		//  const f = createFetch(fetch);
		//  return {
			//  props: {
				//  projects: await f('/api/github')
			//  }
		//  };
	//  };
</script>

<script lang="ts">
	onMount(() => {
		isMenuActive.set(false);
	});
</script>

<MetaData
	title={'Commercial works | Hugo Sum'}
	description={'The portfolio of commercial projects for Hugo Sum, a fullstack developer from Hong Kong.'}
	url={`${env.VITE_DOMAIN_NAME}${$page.path}`}
	image={'/cover.jpg'}
/>

<Heading size={1} color={1}>Commercial works</Heading>

<!--  <iframe title={"Perfect Men, a website built with Next.js"}>  -->
<!--  </iframe>  -->
