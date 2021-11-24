<script context="module" lang="ts">
	import createFetch from 'wrapped-fetch';
	import type { UnwrappedResponse } from 'wrapped-fetch';
	import type { INavItem, ISocialProfile } from '$lib/typing';
	import '/src/app.css';
	export const load = async ({ fetch }) => {
		const f = createFetch(fetch);
		return {
			props: {
				_pages: await f('/api/states/nav-bar'),
				_socialProfiles: await f('/api/social')
			}
		};
	};
</script>

<script lang="ts">
	import { pageList, socialProfiles } from '$lib/store';
	export let _pages: UnwrappedResponse<Array<INavItem>>,
		_socialProfiles: UnwrappedResponse<Array<ISocialProfile>>;
	pageList.set(_pages.body);
	socialProfiles.set(_socialProfiles.body);
</script>

<div class="main">
	<slot />
</div>

<style>
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
