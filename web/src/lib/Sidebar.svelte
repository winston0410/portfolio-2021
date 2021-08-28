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
    padding: var(--sm-space) 0;
    position: sticky;
    top: var(--sectionYpadding);
    align-self: start;
}

@media (min-width: 1200px){
    .sidebar{
      flex-direction: column;
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
