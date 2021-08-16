<script context="module" lang="ts">
  import { amp, browser, dev, mode, prerendering } from '$app/env';
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

<svelte:head>
    <style>
@font-face {
	font-family: 'VT323';
	font-weight: 400;
	src: local('VT323'), url('/VT323.woff2') format('woff2'), url('/VT323.ttf') format('truetype');
	font-display: swap;
}

:root{
    --xs: 0.618;
    --sm: 1;
    --md: 1.618;
    --lg: 2.618;
    --xl: 4.236;
}

/* space */
:root{
    --space-base-value: 8px;
    --xs-space: calc(var(--xs) * var(--space-base-value));
    --sm-space: calc(var(--sm) * var(--space-base-value));
    --md-space: calc(var(--md) * var(--space-base-value));
    --lg-space: calc(var(--lg) * var(--space-base-value));
    --xl-space: calc(var(--xl) * var(--space-base-value));
}

/* font-family */
:root {
    --display-font: VT323;
    --content-font: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
}

/* font-size */
:root{
    --font-base-value: 16px;
    --xs-font: calc(var(--xs) * var(--font-base-value));
    --sm-font: calc(var(--sm) * var(--font-base-value));
    --md-font: calc(var(--md) * var(--font-base-value));
    --lg-font: calc(var(--lg) * var(--font-base-value));
    --xl-font: calc(var(--xl) * var(--font-base-value));
}

/* color */
:root{
    --base-color: hsla(50, 10%, 11%, 1);
    --base-contrast-color: hsla(50, 5%, 90%, 1);
    --highlight-color: hsla(45, 98%, 50%, 1);
    --highlight-tint1-color: hsla(45, 98%, 75%, 1);
}

a {
   color: var(--highlight-color);
   text-decoration: none;
}

ul {
    list-style: none;
    padding: 0px;
}
    </style>
</svelte:head>

<header class="topbar">
    <div class="topbar-inner">
    This is the top bar
    </div>
</header>
<main class="main">
	<slot></slot>
</main>
