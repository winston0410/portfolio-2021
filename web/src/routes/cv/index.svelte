<script context="module" lang="ts">
import { getProps } from '/src/helper'

export const load = getProps({ projects: '/api/cv'});

</script>

<script lang="ts">
  export let projects;
  export const { ok, value } = projects;
  console.log('check value')
</script>

<svelte:head>
	<title>CV</title>
</svelte:head>
