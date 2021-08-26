<script context="module" lang="ts">
import { getProps } from '/src/helper'

export const load = getProps({ projects: '/api/github'});

</script>

<script lang="ts">
  export let projects;
  export const { ok, value } = projects;
</script>

<svelte:head>
	<title>Opensource</title>
</svelte:head>

<style>
    .list{
        display: grid;
        grid-row-gap: var(--sm-space);
        grid-column-gap: var(--sm-space);
    }
        
    @media (min-width: 768px){
      .list{
        grid-template-columns: repeat(2, minmax(0, 1fr));
      }
    }
        
    @media (min-width: 1200px){
      .list{
        grid-template-columns: repeat(3, minmax(0, 1fr));
      }
    }
</style>

<main>
<h1>Opensource</h1>
    <ul class="list" role="list">
    <!--  https://docs.github.com/en/rest/reference/repos#list-repository-languages  -->
	{#each value as { name, description, html_url, languages }}
		<li>
        <a href={html_url}>
            <span>{name}</span>
		</a>
        <p>{description}</p>
        </li>
	{/each}
    </ul>
</main>

