<script context="module" lang="ts">
  import "/src/modern-normalize.css"
  //  import "/src/app.css"

  import { getProps } from "/src/helper"
  import NavBar from "/src/components/NavBar.svelte"
  
  export const load = getProps({ pages: '/api/states/nav-bar'});
</script>

<script lang="ts">
  export let pages;
  export const { ok, value } = pages;
</script>

<style>
    .navbar{
    display: flex;
    flex-direction: column;
    }

    .navbar-item{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: var(--sm-space);
    }

    .navbar-item-link{
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .navbar-item-link-text{
        font-size: var(--sm-font);
    }

    .title{
    display: flex;
    align-items: center;
    flex-direction: column;
    }

    .title-heading{
    font-size: 80px;
    font-family: var(--display-font);
    font-weight: normal;
    color: var(--highlight);
    }

    @media (min-width: 768px){
      .title-heading{
      font-size: 120px;
      }
    }

    .title-subheading{
        text-align: center;
        font-size: var(--md-font);
    }
</style>

<div class={"title"}>
<h1 class={"title-heading"}>Hugo Sum</h1>
<span class={"title-subheading"}>Fullstack developer from Hong Kong</span>
</div>

<nav>
    <ul class="navbar">
	{#each value as { name, url }}
		<li class="navbar-item">
        <a class="navbar-item-link" href={url}>
            <span class="navbar-item-link-text">{name}</span>
		</a>
        </li>
	{/each}
    </ul>
</nav>
