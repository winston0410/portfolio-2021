<script context="module" lang="ts">
import { getProps } from '/src/helper'
 //  console.log('check get Props', getProps);
 //  export async function load({ fetch }) {
    //  const res = await fetch('/api/github');
  //  if (res.ok) return { props: { projects: await res.json() } };
  //  console.log('error found', res.status);
  //  return {
    //  status: res.status,
    //  error: new Error()
   //  };
  //  }
export const load = getProps({ projects: '/api/github'});

</script>

<script lang="ts">
  export let projects;
  console.log('check final value', projects);
</script>

<svelte:head>
	<title>Opensource</title>
</svelte:head>

<main>
<h1>Opensource</h1>
</main>

