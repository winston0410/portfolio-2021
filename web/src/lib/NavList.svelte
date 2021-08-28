<script>
  export let pages
  export let isActive = false
  console.log('check page', pages)
</script>

<style>
nav{
    position: absolute;
}

.active{
    display: block;
}
</style>

<nav class={isActive ? "active" : ""}>
    <ul role="list">
	{#each pages as { name, url }}
		<li>
        <a href={url}>
            <span>{name}</span>
		</a>
            </li>
	{/each}
    </ul>
</nav>
