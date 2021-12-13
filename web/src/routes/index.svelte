<script context="module" lang="ts">
	import MetaData from '$lib/MetaData.svelte';
	import env from '$lib/env';
</script>

<script lang="ts">
	import { pageList } from '$lib/store';
</script>

<MetaData
	title={'Portfolio of Hugo Sum'}
	description={'The personal website for Hugo Sum, a fullstack developer from Hong Kong.'}
	url={`${env.VITE_DOMAIN_NAME}`}
	image={'/cover.jpg'}
/>

<main class="mainpage">
	<div>
		<div class={'title'}>
			<h1 class={'title-heading'}>Hugo Sum</h1>
			<span class={'title-subheading'}>Fullstack developer from Hong Kong</span>
		</div>

		<nav>
			<ul class="navbar" role="list">
				{#each $pageList as { name, url }, index}
					<li class={`navbar-item fade-in-order-${index}`}>
						<a sveltekit:prefetch class="navbar-item-link" href={url}>
							<span class="navbar-item-link-text">{name}</span>
						</a>
					</li>
				{/each}
			</ul>
		</nav>
	</div>
</main>

<style>
	.mainpage {
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 0 var(--md-space);
	}

	.navbar {
		display: flex;
		flex-direction: column;
	}

	.navbar-item {
		width: 100%;
		display: flex;
		justify-content: center;
		margin-bottom: var(--sm-space);
	}

	.navbar-item-link {
		width: 100%;
		display: flex;
		justify-content: center;
	}

	.navbar-item-link-text {
		font-size: var(--sm-font);
		font-weight: 700;
	}

	@media (min-width: 1200px) {
		.navbar-item-link-text {
			font-size: var(--md-font);
		}
	}

	.title {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-bottom: var(--md-space);
	}

	.title-heading {
		font-size: 58px;
		font-family: var(--display-font);
		font-weight: 700;
		color: var(--highlight);
	}

	@media (min-width: 768px) {
		.title-heading {
			font-size: 90px;
		}
	}

	.title-subheading {
		text-align: center;
		font-size: var(--md-font);
	}

	@media (min-width: 1200px) {
		.title-heading {
			font-size: 120px;
		}
		.title-subheading {
			font-size: var(--lg-font);
		}
	}

	@keyframes fade-in-from-left {
		0% {
			transform: translateX(-20px);
			opacity: 0;
		}

		100% {
			transform: translateX(0px);
			opacity: 1;
		}
	}

	.fade-in-order-0 {
		animation: fade-in-from-left var(--time-3);
	}

	.fade-in-order-1 {
		animation: fade-in-from-left var(--time-6);
	}
        
	.fade-in-order-2 {
		animation: fade-in-from-left var(--time-9);
	}
</style>
