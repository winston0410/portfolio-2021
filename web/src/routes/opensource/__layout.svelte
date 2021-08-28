<script context="module" lang="ts">
  import Sidebar from '$lib/Sidebar.svelte'
</script>

<style>
    .container{
        position: relative;
    }
    @media (min-width: 1200px) {
        .container{
        display: grid;
        grid-template-columns: var(--sidebar) var(--main);
        padding: var(--sectionYpadding) 0;
        }
    }
</style>

<div class="container">
<Sidebar />
<slot></slot>
</div>
