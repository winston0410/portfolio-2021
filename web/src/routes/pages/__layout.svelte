<script context="module" lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
	import { fly } from 'svelte/transition';
	import { page } from '$app/stores';
</script>

<div class="container">
	<Sidebar />
	{#key $page}
		<main class="inner-container" in:fly={{ y: 100, duration: 1000 }}>
			<slot />
		</main>
	{/key}
</div>

<style>
	.container {
		position: relative;
	}
	@media (min-width: 1200px) {
		.container {
			display: grid;
			grid-template-columns: var(--sidebar) var(--main);
		}
	}

	.inner-container {
		--paddingX: var(--md-space);
	}

	@media (min-width: 1200px) {
		.inner-container {
			--paddingX: var(--xxl-space);
		}
	}

	.inner-container {
		padding: calc(var(--headerOffset) + var(--sectionYpadding)) var(--paddingX)
			var(--sectionYpadding);
	}

	@media (min-width: 1200px) {
		.inner-container {
			padding: var(--sectionYpadding) var(--paddingX);
		}
	}

	@media print {
		.inner-container {
			padding: var(--paddingX);
		}
	}
</style>
