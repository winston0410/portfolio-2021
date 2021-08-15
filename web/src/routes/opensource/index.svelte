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

<main>
<h1>Opensource</h1>
    <ul>
    <!--  https://docs.github.com/en/rest/reference/repos#list-repository-languages  -->
	{#each value as { name, description, html_url, language }}
		<li>
        <a href={html_url}>
            <span>{name}</span>
		</a>
        <p>{description}</p>
        </li>
	{/each}
    </ul>
</main>

