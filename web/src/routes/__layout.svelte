<script context="module" lang="ts">
	import { onMount, onDestroy } from 'svelte'
	import createFetch from 'wrapped-fetch';
	import type { UnwrappedResponse } from 'wrapped-fetch';
	import type { INavItem, ISocialProfile } from '$lib/typing';
	import '/src/app.css';
	import "@fontsource/arimo";
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
		}

		const dpi = window.devicePixelRatio;

		const pageNeeded = Math.ceil(mainContainer.clientHeight / a4Size[dpi])

		const heightNeeded = a4Size[dpi] * pageNeeded

		mainContainer.style.height = `${heightNeeded}px`
	}

	// const handleAfterPrint = () => {
	// 	mainContainer.style.height = `100%`
	// }

	onMount(() => {
		window.addEventListener('beforeprint', handlePrint)
		// window.addEventListener('afterprint', handleAfterPrint)
	})
</script>

<div class="main" bind:this={mainContainer}>
	<slot />
</div>

<style>
	:global(html) {
		font-size: 16px;
		scroll-behavior: smooth;
	}

	:global(strong) {
		font-weight: 700;
	}


	:global(a) {
		color: var(--highlight-color);
		text-decoration: none;
        cursor: pointer;
	}

    :global(a *){
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
