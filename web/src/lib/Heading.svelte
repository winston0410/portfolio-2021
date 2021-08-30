<script lang="ts">
export let smaller: boolean
</script>

<!--  Code smell here, but this pattern makes using inline-style impossible  -->
<style>
    .heading {
        --heading-font-size: var(--lg-font);
        --heading-color: var(--highlight-color);
        --heading-margin-b: var(--md-space);
    }
        
@media (min-width: 1200px){
    .heading{
        --heading-font-size: var(--xl-font);
    }
}

    .heading{
        color: var(--heading-color);
        font-size: var(--heading-font-size);
        margin-bottom: var(--heading-margin-b);
    }
    
    .heading.smaller{
        --heading-font-size: var(--md-font);
    }
        
@media (min-width: 1200px){
    .heading.smaller{
        --heading-font-size: var(--lg-font);
    }
}
</style>

<h2 class={`heading ${smaller && "smaller"}`}>
    <slot />
</h2>
