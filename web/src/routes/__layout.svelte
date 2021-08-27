<script context="module" lang="ts">
  import { amp, browser, dev, mode, prerendering } from '$app/env';
  import "/src/app.css"
</script>

<style>
    :global(a) {
       color: var(--highlight-color);
       text-decoration: none;
    }

    :global(ul) {
       padding: 0px;
       margin: 0px;
    }

    :global(body) {
        background: var(--base-color);
        font-family: var(--content-font);
    }

    :global(h1){
        font-size: var(--lg-font);
        margin: var(--md-space) 0;
    }
        
    :global(code){
        background: var(--highlight-tint2-color);
        color: #000;
    }

    .topbar {
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      color: var(--base-contrast-color);
      background: var(--base-color);
      padding: var(--md-space) 0;
    }

    .topbar-inner{
        display: flex;
        justify-content: center;
     }

    .main{
      color: var(--base-contrast-color);
      background: var(--base-color);
      padding: 0 var(--md-space);
      max-width: var(--container-width);
      margin-left: auto;
      margin-right: auto;
    }
</style>

<!--  <header class="topbar">  -->
    <!--  <div class="topbar-inner">  -->
    <!--  This is the top bar  -->
    <!--  </div>  -->
<!--  </header>  -->
<main class="main">
	<slot></slot>
</main>
