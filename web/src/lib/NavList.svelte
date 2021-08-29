<script context="module" lang="ts">
</script>

<script lang="ts">
    //  TODO: Handle current page and disable link
    import { page } from '$app/stores';
    console.log('chekc page', $page)
  export let pages
  export let isActive = false
  console.log('check page', pages, $page.path)
</script>

<style>
nav{
    display: none;
    width: 100%;
}
    
@media (min-width: 1200px){
    nav{
        display: block;
    }
}
    
.navlist-item{
    font-size: var(--md-font);
}  

.active{
    display: block;
}
</style>

<nav class={isActive ? "active" : ""}>
    <ul role="list">
	{#each pages as { name, url }}
		<li class="navlist-item">
        {#if url === $page.path}
            <span aria-current="page">{name}</span>
        {:else}
            <a href={url}>
                <span>{name}</span>
            </a>
        {/if}
            </li>
	{/each}
    </ul>
</nav>
