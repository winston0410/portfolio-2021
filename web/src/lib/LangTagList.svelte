<script context="module" lang="ts">
	import LangTag from '$lib/LangTag.svelte';
</script>

<script lang="ts">
	export let languages;
</script>

<ul class="language-list" role="list">
	{#each Object.keys(languages) as language}
		<LangTag {language} />
	{/each}
</ul>

<style>
	.language-list {
		display: flex;
		flex-wrap: wrap;
	}
</style>
