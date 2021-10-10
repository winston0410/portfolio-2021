<h1 class="title">
	<slot />
</h1>

<style>
	.title {
		--title-font-size: var(--xl-font);
	}

	@media (min-width: 1200px) {
		.title {
			--title-font-size: var(--xxl-font);
		}
	}

	.title {
		font-size: var(--title-font-size);
	}
</style>
