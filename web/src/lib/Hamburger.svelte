<script lang="ts">
	import Bar from '$lib/Bar.svelte';
	export let isActive: boolean;
</script>

<svg viewBox="0 0 70 70" width="28" height="28">
	<g class={`hamburger ${isActive ? 'active' : 'inactive'}`} id="hamburger">
		<title>Hamburger icon</title>
		<desc>The hamburger icon for toggling menu</desc>
		<Bar opts={{ id: 'top-bar', y: '10' }} />
		<Bar opts={{ id: 'middle-bar', y: '30' }} />
		<Bar opts={{ id: 'bottom-bar', y: '50' }} />
	</g>
</svg>

<!--  Use global to get id of the belowing component  -->
<style>
	.hamburger :global(*) {
		transform-origin: center;
	}

	.active :global(#top-bar) {
		transform: translateY(20px) rotate(45deg);
	}

	.active :global(#middle-bar) {
		opacity: 0;
	}

	.active :global(#bottom-bar) {
		transform: translateY(-20px) rotate(135deg);
	}
</style>
