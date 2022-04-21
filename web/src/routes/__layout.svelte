<script context="module" lang="ts">
	import { onMount } from 'svelte';
	import createFetch from 'wrapped-fetch';
	import type { UnwrappedResponse } from 'wrapped-fetch';
	import type { INavItem, ISocialProfile } from '$lib/typing';
	import '/src/app.css';
	import { page } from '$app/stores';
	import MetaData from '$lib/MetaData.svelte';

	export const load = async ({ fetch }) => {
		const f = createFetch(fetch);
		return {
			props: {
				// NOTE Has to fetch version route once in order to prevent treeshaking
				version: await f('/api/version'),
				_pages: await f('/api/states/nav-bar'),
				_socialProfiles: await f('/api/social')
			}
		};
	};
	import { pageList, socialProfiles } from '$lib/store';
</script>

<script lang="ts">
	export let _pages: UnwrappedResponse<Array<INavItem>>,
		_socialProfiles: UnwrappedResponse<Array<ISocialProfile>>;
	pageList.set(_pages.body);
	socialProfiles.set(_socialProfiles.body);

	let mainContainer;

	const handlePrint = () => {
		// not sure about the pixel size for A4, but it is working perfectly right now
		const a4Size = {
			1: 1120,
			2: 1120
		};

		const dpi = window.devicePixelRatio;

		const pageNeeded = Math.ceil(mainContainer.clientHeight / a4Size[dpi]);

		const heightNeeded = a4Size[dpi] * pageNeeded;

		mainContainer.style.height = `${heightNeeded}px`;
	};

	onMount(() => {
		window.addEventListener('beforeprint', handlePrint);
	});
</script>

<MetaData
	title={$page.stuff.title}
	description={$page.stuff.description}
	url={`${$page.url.protocol}//${$page.url.host}${$page.url.pathname}`}
	image={$page.stuff.image}
/>

<div class="main" bind:this={mainContainer}>
	<slot />
</div>

<style>
	:global(a) {
		color: var(--highlight-color);
		text-decoration: none;
		cursor: pointer;
	}

	:global(a *) {
		cursor: pointer;
	}

	:global(a:hover) {
		color: var(--highlight-color-tint1);
	}

	:global(ul) {
		padding: 0px;
		margin: 0px;
	}

	:global(body) {
		--content-font-size: var(--sm-font);
	}

	:global(body) {
		background: var(--base-color);
		font-family: var(--content-font);
		font-size: var(--content-font-size);
	}

	:global(button) {
		appearance: none;
		border: none;
		padding: 0;
		margin: 0;
	}

	:global(h1) {
		font-size: var(--lg-font);
		margin-bottom: var(--xl-space);
	}

	:global(h1, h2, h3, h4, h5, h6) {
		line-height: 1;
	}

	:global(code) {
		background: var(--highlight-color-tint2);
		color: #000;
		padding: 0 var(--xs-space);
	}

	.main {
		color: var(--base-contrast-color);
		background: var(--base-color);
		max-width: var(--container-width);
		margin-right: auto;
		margin-left: auto;
	}
</style>
