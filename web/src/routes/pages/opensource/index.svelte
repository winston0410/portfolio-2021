<script context="module" lang="ts">
	import LangTagList from '$lib/LangTagList.svelte';
	import Heading from '$lib/Heading.svelte';
	import MetaData from '$lib/MetaData.svelte';
	import { onMount } from 'svelte';
	import env from '$lib/env';
	import { page } from '$app/stores';
	import createFetch from 'wrapped-fetch';
	import type { UnwrappedResponse } from 'wrapped-fetch';
	import type { IProject } from '$lib/typing';

	export const load = async ({ fetch }) => {
		const f = createFetch(fetch);
		return {
			props: {
				projects: await f('/api/github')
			}
		};
	};
</script>

<script lang="ts">
	import { isMenuActive } from '$lib/store';
	onMount(() => {
		isMenuActive.set(false);
	});
	export let projects: UnwrappedResponse<Array<IProject>>;
</script>

<MetaData
	title={'Opensource | Hugo Sum'}
	description={'The portfolio of opensource projects for Hugo Sum, a fullstack developer from Hong Kong.'}
	url={`${env.VITE_DOMAIN_NAME}${$page.path}`}
	image={'/cover.jpg'}
/>

<Heading size={1} color={1}>Opensource</Heading>
<!--  https://docs.github.com/en/rest/reference/repos#list-repository-languages  -->
{#if projects.ok}
	<ul class="list" role="list">
		{#each projects.body as { name, description, html_url, languages }}
			<li class="list-item">
				<Heading size={3}>
					<a rel="external" title={`Link to repository of ${name}`} href={html_url}>{name}</a>
				</Heading>
				<div>
					<LangTagList {languages} />
				</div>
				<p class="list-item-description">{@html description}</p>
			</li>
		{/each}
	</ul>
{:else}
	<div>Something wrong with the server.</div>
{/if}

<style>
	.list {
		display: grid;
		grid-row-gap: var(--sm-space);
		grid-column-gap: var(--sm-space);
	}

	@media (min-width: 768px) {
		.list {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1200px) {
		.list {
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}

	@media print {
		.list {
			display: table;
		}

		.list li{
			display: inline-block;
			width: 47%;
			max-width: 47%;
			vertical-align: top;
			margin-bottom: var(--xl-space);
		}

		.list li:nth-child(odd){
			margin-right: 3%;
		}
	}

	.list-item-description {
		font-size: var(--sm-font);
	}
</style>
