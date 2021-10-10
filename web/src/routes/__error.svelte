<script context="module" lang="ts">
	export function load({ error, status }) {
		return {
			props: {
				title: `${status}: ${error.message}`
			}
		};
	}
</script>

<script lang="ts">
</script>

<main>
	<div>
		<h1>
			Cache me if you can...
			<p>But this is a <span>404</span>!</p>
			<p />
		</h1>
		<a class="link" href="/">Back to Home</a>
	</div>
</main>

<style>
	main {
		height: 100vh;
		display: grid;
		justify-content: center;
		align-items: center;
		padding: 0 var(--md-space);
	}

	span {
		color: var(--highlight-color);
	}

	a {
		display: flex;
		justify-content: center;
		font-weight: 700;
	}

	a:hover {
		color: var(--highlight-color-tint1);
	}
</style>
