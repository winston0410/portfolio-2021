<script context="module" lang="ts">
  import { amp, browser, dev, mode, prerendering } from '$app/env';
</script>

<style>
    .topbar {
      position: fixed;
      top: 0px;
      left: 0px;
      right: 0px;
      color: var(--color-base-contrast);
      background: var(--color-base);
    }

    .topbar-inner{
        display: flex;
        justify-content: center;
     }

    .main{
      color: var(--color-base-contrast);
      background: var(--color-base);
    }
</style>

<header class={"topbar"}>
    <div class={"topbar-inner"}>
    This is the top bar
    </div>
</header>
<main class={"main"}>
	<slot />
</main>
