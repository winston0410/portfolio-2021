<script context="module" lang="ts">
import NavList from '$lib/NavList.svelte'
import { pageList } from "/src/store"
</script>

<script lang="ts">
export let active = false

const handleClick = () => {
    console.log('clicking', active)
    active = !active
}
</script>

<style>
.sidebar{
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: var(--sm-space) var(--md-space);
    flex-wrap: wrap;
    background: var(--base-color-shade1);
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
}

@media (min-width: 1200px){
    .sidebar{
        position: sticky;
        top: 0px;
        align-self: start;
        flex-direction: column;
        padding-bottom: calc(var(--sm-space) + var(--sectionYpadding));
        height: 100vh;
    }

    .menu-button{
      display: none;
    }
}
</style>

<aside class="sidebar">
    <span>Hugo Sum</span>
    <button class="menu-button" type="button" on:click={handleClick}>Menu</button>
    <NavList pages={$pageList} isActive={active}/>
</aside>
