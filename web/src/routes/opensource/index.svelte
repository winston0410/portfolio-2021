<script context="module" lang="ts">
 import { getProps } from '../../helper'
 //  console.log('check get Props', getProps);
 export async function load({ fetch }) {
    const res = await fetch('/api/github');
  if (res.ok) return { props: { projects: await res.json() } };
  console.log('error found', res.status);
  return {
    status: res.status,
    error: new Error()
   };
  }
  //  export getProps([['/api/github', 'project']])
</script>

<script lang="ts">
  export let projects;
  console.log('check user', projects);
</script>

<svelte:head>
	<title>Opensource</title>
</svelte:head>

<main>
<h1>Opensource</h1>
</main>

