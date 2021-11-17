<script lang="ts" context="module">
	import LangTagList from '$lib/LangTagList.svelte';
	import MetaData from '$lib/MetaData.svelte';
	import Heading from './Heading.svelte';
	import { page } from '$app/stores';

	export { Heading as h2 };
</script>

<script lang="ts">
	//  Typescript is not supported my mdsvex right now
	// REF https://github.com/pngwn/MDsveX/issues/357
	export let title;
	export let description;
	export let image = '/cover.jpg';
	export let tags;
</script>

<MetaData {title} {description} {image} url={`https://${$page.host}${$page.path}`} />
<div class="markdown-article">
	<Heading size={1} color={1}>{title}</Heading>
	<LangTagList languages={tags} />
	<slot />
</div>

<style>
	:global(.markdown-article p) {
		margin-bottom: var(--lg-space);
	}

	:global(.markdown-article ul) {
		padding-left: var(--md-space);
	}

	@media (min-width: 1200px) {
		:global(.markdown-article p) {
		}
	}
</style>
