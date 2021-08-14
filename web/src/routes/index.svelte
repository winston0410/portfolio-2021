<script context="module" lang="ts">
  import "/src/app.css"

  import { getProps } from "/src/helper"
  import glory from "/src/cssRenderer"

  const style = glory.virtual({
    fontFamily: "VT323",
    fontSize: "40px",
  })

  import NavBar from "/src/components/NavBar.svelte"
  
  export const load = getProps({ pages: '/api/states/nav-bar'});
</script>

<script lang="ts">
  export let pages;
  console.log(pages)
</script>

<h1 class={style}>Hello</h1>

<!--  <NavBar pages={pages}/>  -->
