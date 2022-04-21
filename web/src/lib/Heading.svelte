<script lang="ts" context="module">
    import max from '$lib/actions/maxHeight'
</script>

<script lang="ts">
	export let color: number = 2;
	export let size: number = 2;
	export let tag: string = 'h2';
    export let maxHeight = false;
	export const className = `heading color-${color} size-${size}`;
</script>

<!--  Limitation for svelte3 right now, no dynamic tag  -->
{#if tag === 'h1'}
	<h1 class={className} use:max={maxHeight}>
		<slot />
	</h1>
{:else if tag === 'h2'}
	<h2 class={className} use:max={maxHeight}>
		<slot />
	</h2>
{:else if tag === 'h3'}
	<h3 class={className} use:max={maxHeight}>
		<slot />
	</h3>
{:else if tag === 'h4'}
	<h4 class={className} use:max={maxHeight}>
		<slot />
	</h4>
{/if}

<!--  Code smell here, but this pattern makes using inline-style impossible  -->
<style>
	.heading {
		--heading-font-size: var(--lg-font);
		--heading-color: var(--highlight-color);
		--heading-margin-b: var(--md-space);
	}

	@media (min-width: 1200px) {
		.heading {
			--heading-font-size: var(--xl-font);
		}
	}

	.heading {
		color: var(--heading-color);
		font-size: var(--heading-font-size);
		margin-bottom: var(--heading-margin-b);
	}

	.color-1 {
		--heading-color: var(--base-contrast-color);
	}

	.color-3 {
		--heading-color: var(--highlight-color-tint1);
	}

	.size-1 {
		--heading-font-size: var(--xl-font);
	}

	@media (min-width: 1200px) {
		.size-1 {
			--heading-font-size: var(--xxl-font);
		}
	}

	.size-3 {
		--heading-font-size: var(--md-font);
		--heading-margin-b: var(--sm-space);
	}

	@media (min-width: 1200px) {
		.size-3 {
			--heading-font-size: var(--lg-font);
		}
	}

	.size-4 {
		--heading-font-size: var(--sm-font);
		--heading-margin-b: var(--xs-space);
	}

	@media (min-width: 1200px) {
		.size-4 {
			--heading-font-size: var(--md-font);
		}
	}
</style>
