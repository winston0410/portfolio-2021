<script context="module" lang="ts">
//  Using inline svg for easier styling
import GithubIcon from '$lib/svg/github.svelte'
import LinkedInIcon from '$lib/svg/linkedin.svelte'
</script>

<script lang="ts">
export let socialProfiles
</script>

<style>
    ul{
        display: flex;
        flex-direction: row;
        justify-content: center;
   }

   li{
margin: 0 var(--md-space);
   }

    .navlist-item a{
        display: block;
    }
        
</style>

<ul role="list">
	{#each socialProfiles as { url, name }}
		<li class="navlist-item">
            <a rel="external" href={url}>
                {#if name === "github"}
                    <GithubIcon />
                {:else if name === "linkedin"}
                    <LinkedInIcon />
                {/if}
            </a>
        </li>
	{/each}
</ul>
