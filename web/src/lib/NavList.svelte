<script context="module" lang="ts">
//  import { getProps } from '/src/helper'
//  export const load = getProps({ profile: '/api/social'});
</script>

<script lang="ts">
//  TODO: Handle current page and disable link
import { page } from '$app/stores';
export let pages
export let isActive = false
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

@media (min-width: 1200px){
    .navlist-item{
      text-align: center;
    }
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

<!--  <ul list="role">  -->
	<!--  {#each socialProfiles.value as { url }}  -->
		<!--  <li class="navlist-item">  -->
            <!--  <a rel="external" href={url}>test</a>  -->
        <!--  </li>  -->
	<!--  {/each}  -->
<!--  </ul>  -->
