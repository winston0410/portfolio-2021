<script context="module" lang="ts">
  import { getProps } from "/src/helper"
  import { pageList, socialProfiles } from "/src/store"
  export const load = getProps({ _pages: '/api/states/nav-bar', _socialProfiles: '/api/social'});
  import "/src/app.css"
</script>

<script lang="ts">
export let _pages, _socialProfiles
export const pages = _pages.value
pageList.set(pages)
socialProfiles.set(_socialProfiles.value)
</script>

<style>
    :global(a) {
       color: var(--highlight-color);
       text-decoration: none;
    }
        
    :global(a:hover) {
       color: var(--highlight-color-tint1);
    }

    :global(ul) {
       padding: 0px;
       margin: 0px;
    }

    :global(body){
        --content-font-size: var(--sm-font);
    }

    :global(body){
        background: var(--base-color);
        font-family: var(--content-font);
        font-size: var(--content-font-size);
    }
        
    :global(button) {
        appearance: none;
        border: none;
        padding: 0;
        margin: 0;
    }

    :global(h1){
        font-size: var(--lg-font);
        margin-bottom: var(--xl-space);
    }

    :global(h1,h2,h3,h4,h5,h6){
        line-height: 1;
    }
        
    :global(code){
        background: var(--highlight-color-tint2);
        color: #000;
    }

    .main{
      color: var(--base-contrast-color);
      background: var(--base-color);
      max-width: var(--container-width);
      margin-right: auto;
      margin-left: auto;
    }
</style>

<div class="main">
    <slot></slot>
</div>
