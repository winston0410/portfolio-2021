<script>
  export let pages
  console.log('check page', pages)
</script>

<nav>
    <ul>
	{#each pages as { name, url }}
		<li>
        <a href={url}>
            <span>{name}</span>
		</a>
            </li>
	{/each}
    </ul>
</nav>
