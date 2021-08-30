<script lang="ts">
</script>

<style>
    .subheading {
        --subheading-font-size: var(--md-font);
        --subheading-color: var(--highlight-color-tint1);
        --subheading-margin-b: var(--sm-space);
    }
        
@media (min-width: 1200px){
    .subheading{
        --subheading-font-size: var(--lg-font);
    }
}

    .subheading{
        color: var(--subheading-color);
        font-size: var(--subheading-font-size);
        margin-bottom: var(--subheading-margin-b);
    }
</style>

<h3 class="subheading">
    <slot />
</h3>
