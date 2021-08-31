<script context="module" lang="ts">
import { getProps } from '/src/helper'
import LangTagList from '$lib/LangTagList.svelte'
import Title from '$lib/Title.svelte'
import Heading from '$lib/Heading.svelte'
export const load = getProps({ projects: '/api/github'});
import { onMount } from 'svelte';
</script>

<script lang="ts">
import { isMenuActive } from "/src/store"
onMount(() => {
    isMenuActive.set(false)
})
interface IProjects {
    name: string,
    description: string,
    html_url: string,
    languages: {
        [key:string]: number
    }
}
export let projects: {ok: boolean, value: Array<IProjects>};
</script>

<svelte:head>
	<title>Opensource</title>
    <meta name="description" content="The portfolio of opensource projects for Hugo Sum, a fullstack developer from Hong Kong." />
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
    <!--  https://docs.github.com/en/rest/reference/repos#list-repository-languages  -->
{#if projects.ok}
<ul class="list" role="list">
{#each projects.value as { name, description, html_url, languages }}
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
{:else}
    <div>Something wrong with the server.</div>
{/if}
