<script context="module" lang="ts">
  import { getProps } from "/src/helper"
</script>

<script lang="ts">
import { pageList } from "/src/store"
</script>

<style>
    .mainpage {
      height: 100vh;
      display: flex;
    justify-content: center;
        align-items: center;
    }

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
    margin-bottom: var(--md-space);
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
        
    @keyframes fade-in-from-left {
        0%{
            transform: translateX(-20px);
            opacity: 0;
        }

        100%{
            transform: translateX(0px);
            opacity: 1;
        }
    }

    .fade-in-order-0{
        animation: fade-in-from-left var(--time-3);
    }
    
    .fade-in-order-1{
        animation: fade-in-from-left var(--time-6);
    }
</style>

<div class="mainpage">
<div> 
<div class={"title"}>
<h1 class={"title-heading"}>Hugo Sum</h1>
<span class={"title-subheading"}>Fullstack developer from Hong Kong</span>
</div>

<nav>
    <ul class="navbar" role="list">
	{#each $pageList as { name, url }, index}
		<li class={`navbar-item fade-in-order-${index}`}>
        <a sveltekit:prefetch class="navbar-item-link" href={url}>
            <span class="navbar-item-link-text">{name}</span>
		</a>
        </li>
	{/each}
    </ul>
</nav>
</div>
</div>
