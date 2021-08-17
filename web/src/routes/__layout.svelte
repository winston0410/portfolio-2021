<script context="module" lang="ts">
  import { amp, browser, dev, mode, prerendering } from '$app/env';
  import "/src/app.css"
  import "/src/modern-normalize.css"

</script>

<style>
    .topbar {
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      color: var(--base-contrast-color);
      background: var(--base-color);
      padding: var(--sm-space) 0;
    }

    .topbar-inner{
        display: flex;
        justify-content: center;
        font-family: var(--content-font);
     }

    .main{
      color: var(--base-contrast-color);
      background: var(--base-color);
    }
</style>

<header class="topbar">
    <div class="topbar-inner">
    This is the top bar
    </div>
</header>
<main class="main">
	<slot></slot>
</main>
