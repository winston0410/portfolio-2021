<script context="module" lang="ts">
import { getProps, getLangColorName } from '/src/helper'
import LangTagList from '$lib/LangTagList.svelte'
import Title from '$lib/Title.svelte'
import Heading from '$lib/Heading.svelte'
export const load = getProps({ _projects: '/api/github'});

</script>

<script lang="ts">
  export let _projects;
  export const { ok, value: projects } = _projects;
</script>

<svelte:head>
	<title>Opensource</title>
    <meta name="description" content="" />
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

    .list-item-link {
        font-size: var(--md-font);
    }
        
    .list-item-description {
        font-size: var(--sm-font);
    }
</style>

<Title>Opensource</Title>
    <ul class="list" role="list">
    <!--  https://docs.github.com/en/rest/reference/repos#list-repository-languages  -->
	{#each projects as { name, description, html_url, languages }}
		<li class="list-item">
        <a class="list-item-link" href={html_url}>
            <Heading smaller={true}>{name}</Heading>
		</a>
        <div>
            <LangTagList languages={languages}/>
        </div>
        <p class="list-item-description">{@html description}</p>
        </li>
	{/each}
</ul>
