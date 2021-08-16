<script context="module" lang="ts">
  import glory from "/src/cssRenderer";
  import color from "/src/styles/color";
  import { xsPx } from "/src/styles/base";
  import { amp, browser, dev, mode, prerendering } from '$app/env';
  
  console.log('check glory in layout', glory.raw, 'is node server', browser)
</script>

<header class={glory.virtual({
      position: "fixed",
      top: "0px",
      left: "0px",
      right: "0px",
      color: color.baseContrast,
      background: color.base,
      ...xsPx
    })}>
    <div class={glory.virtual({
      display: "flex",
      justifyContent: "center",
    })}>
    This is the top bar
    </div>
</header>

<main class={glory.virtual({
    background: color.base,
    color: color.baseContrast
})}>
	<slot />
</main>
