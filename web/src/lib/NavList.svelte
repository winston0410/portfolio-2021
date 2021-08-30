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
    width: 100%;
    animation: drop-down var(--time-2);
}
    
@media (min-width: 1200px){
    nav{
        display: block;
        animation:none;
    }
}
    
.navlist-item{
    font-size: var(--md-font);
}  

@keyframes drop-down{
    0% {opacity: 0;transform:translateY(-10px);}
    100% {opacity: 1;transform:translateY(0px);}
}

.inactive{
    display: none;
}
    
@media (min-width: 1200px){
    .inactive{
        display: block;
    }
}
</style>

<nav class={isActive ? "" : "inactive"}>
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
