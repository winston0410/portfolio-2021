<script context="module" lang="ts">
	import NavList from '$lib/NavList.svelte';
	import Hamburger from '$lib/Hamburger.svelte';
	import { pageList, isMenuActive } from '$lib/store';
	import resizeObserver from 'svelte-use-resize-observer';

	const handleResize = (e: CustomEvent<{ entries: Array<ResizeObserverEntry> }>) => {
		const elem = e.detail.entries[0];
		const cr = elem.contentRect;
		document.documentElement.style.setProperty('--headerOffset', `${cr.height}px`);
	};
</script>

<script lang="ts">
	const handleClick = () => {
		isMenuActive.update((v: boolean) => !v);
	};
</script>

<!--  bug for svelte-check, as it doesn't pick up event generated from custom action  -->
<aside use:resizeObserver on:resize={handleResize} class="sidebar">
	<a href="/" title="Back to homepage">
		<span class="sidebar-title">Hugo Sum</span>
	</a>
	<button class="menu-button" type="button" on:click={handleClick}
		><Hamburger isActive={$isMenuActive} /></button
	>
	<NavList pages={$pageList} isActive={$isMenuActive} />
</aside>

<style>
	.menu-button {
		display: flex;
		background: transparent;
		fill: var(--base-contrast-color);
	}

	.sidebar {
		display: flex;
		align-items: center;
		flex-direction: row;
		justify-content: space-between;
		padding: var(--sm-space) var(--md-space);
		flex-wrap: wrap;
		background: var(--base-color-shade1);
		position: fixed;
		top: 0px;
		left: 0px;
		right: 0px;
		box-shadow: 0px 3px 3px var(--base-color);
	}

	.sidebar-title {
		font-family: var(--display-font);
		font-weight: 700;
		font-size: var(--lg-font);
	}

	@media (min-width: 1200px) {
		.sidebar {
			position: sticky;
			top: 0px;
			align-self: start;
			flex-direction: column;
			padding-bottom: calc(var(--sm-space) + var(--sectionYpadding));
			height: 100vh;
			justify-content: space-between;
		}

		.sidebar-title {
			font-size: var(--xxl-font);
		}

		.menu-button {
			display: none;
		}
	}
</style>
