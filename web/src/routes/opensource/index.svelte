<script context="module" lang="ts">
  export async function load({ fetch }) {
    const res = await fetch('/api/github');
    console.log(res);
  }
</script>

<svelte:head>
	<title>Opensource</title>
</svelte:head>

<main>
<h1>Opensource</h1>
</main>
