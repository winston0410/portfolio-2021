<script context="module" lang="ts">
	import { getLangColorName } from '/src/helper';
</script>

<script lang="ts">
	export let language;
</script>

<li class={`language-list-item bg-color-${getLangColorName(language)}`}>
	<span class={`font-color-${getLangColorName(language)}`}>{language}</span>
</li>

<style>
	.language-list-item {
		padding: var(--xs-space);
		margin-right: var(--sm-space);
		margin-bottom: var(--sm-space);
		border-radius: var(--md-radius);
		font-size: var(--xxs-font);
	}
</style>
