<script context="module" lang="ts">
	import Sidebar from '$lib/Sidebar.svelte';
</script>

<div class="container">
	<Sidebar />
	<main class="inner-container">
		<slot />
	</main>
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
