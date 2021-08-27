<script context="module" lang="ts">
import { getProps } from '/src/helper'

//  export const load = getProps({ projects: '/api/cv'});

</script>

<script lang="ts">
  export let projects;
  export const { ok, value } = projects;
  console.log('check value', value)
</script>

<svelte:head>
	<title>CV</title>
</svelte:head>

<style>

</style>

<div>
    <h1>Curriculum Vitae</h1>
    <section>
        <h2>Working experience</h2>
    <ul role="list">

    </ul>
    </section>
    
    <section>
        <h2>Education</h2>
    <ul role="list">

    </ul>
    </section>

    <section>
        <h2>Accomplishment</h2>
        <ul role="list">

        </ul>
    </section>
</div>
