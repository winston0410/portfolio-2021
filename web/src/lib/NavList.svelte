<script context="module" lang="ts">
import SocialProfileList from '$lib/SocialProfileList.svelte'
</script>

<script lang="ts">
import { page } from '$app/stores';
import { socialProfiles } from "/src/store"
export let pages
export let isActive = false
</script>

<style>
nav{
    --marginBottom: var(--md-space);
}
    
nav{
    width: 100%;
    animation: drop-down var(--time-2);
    margin-bottom: var(--marginBottom);
}
    
@media (min-width: 1200px){
    nav{
        --marginBottom: var(--lg-space);
    }
    nav{
        display: block;
        animation:none;
        margin-bottom: var(--marginBottom);
    }
}

.nav-container{
  width: 100%;
  display: flex;
   flex-direction: column;
}
    
.navlist-item{
    font-size: var(--md-font);
    font-weight: 700;
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

<div class={`nav-container ${isActive ? "" : "inactive"}`}>
<nav>
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
<SocialProfileList socialProfiles={$socialProfiles}/>
</div>
