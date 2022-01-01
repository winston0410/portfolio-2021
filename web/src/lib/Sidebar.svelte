<script context="module" lang="ts">
	import NavList from '$lib/NavList.svelte';
	import Hamburger from '$lib/Hamburger.svelte';
	import { pageList, isMenuActive } from '$lib/store';
	import resizeObserver from 'svelte-use-resize-observer';
	import Heading from '$lib/Heading.svelte';

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
	<a sveltekit:prefetch href="/" title="Back to homepage">
		<span class="sidebar-title">Hugo Sum</span>
	</a>
	<!--  <a class="action-button no-print" href="https://pdf.hugosum.me/resume" title="Get my CV" rel="external"><span>Get my CV</span></a>  -->
	<button class="menu-button no-print" type="button" on:click={handleClick}
		><Hamburger isActive={$isMenuActive} /></button
	>
	<NavList pages={$pageList} isActive={$isMenuActive} />
	<ul class="contact-list no-screen" role="list">
			<li>
				<Heading size={3} tag={"h4"}>Email</Heading>
				<span class="highlighted">hugosum.dev@protonmail.com</span>
			</li>
			<!-- <li>
				<Heading size={3} tag={"h4"}>Telephone(Canada)</Heading>
				<span class="highlighted">7786890699</span>
			</li> -->
			<li>
				<Heading size={3} tag={"h4"}>Telephone</Heading>
				<span class="highlighted">+44 7522099891</span>
			</li>
			<li>
				<Heading size={3} tag={"h4"}>Address</Heading>
				<span class="highlighted">Craigavon, Northern Ireland</span>
			</li>
	</ul>
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
			height: 100vh !important;
			justify-content: space-between;
		}

		.sidebar-title {
			font-size: var(--xxl-font);
		}

		.menu-button {
			display: none;
		}
	}

	@media print {
		.sidebar {
			position: relative;
		}

		/* .contact-list{ */
			/* display: flex;
			flex-wrap: wrap;
			flex-direction: row; */

			/* display: grid;
			grid-template-columns: repeat(2, 1fr); */
			/* column-gap: var(--sm-space);
			row-gap: var(--md-space); */
		/* } */

		.contact-list li{
			display: flex;
			width: fit-content;
		}

		.contact-list li span{
			margin-left: var(--sm-space);
		}

		.sidebar-title {
			font-size: var(--xl-font);
		}
	}

	/* Contact number and email */

	@media screen {
		.no-screen{
			display: none;
		}
	}

	.highlighted {
		font-weight: 700;
	}

    .action-button{
        color: var(--base-color); 
        font-weight: 700;
        padding: var(--sm-space);
        border-radius: var(--sm-radius);
        background: var(--highlight-color);
    }

    .action-button:hover{
        background: var(--highlight-color-tint1);
    }
</style>
