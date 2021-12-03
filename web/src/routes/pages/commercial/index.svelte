<script context="module" lang="ts">
	import { isMenuActive } from '$lib/store';
	import { onMount } from 'svelte';
	import Heading from '$lib/Heading.svelte';
	import MetaData from '$lib/MetaData.svelte';
	import env from '$lib/env';
	import { page } from '$app/stores';
	import type { ICommercialProject } from '$lib/typing';
	import LangTagList from '$lib/LangTagList.svelte'

	export const load = async ({ fetch }) => {
        const res = await fetch("/api/commercial")
        
        if(!res.ok){
            return {
                status: 500
            }
        }
        
		return {
			props: {
				projects: await res.json()
			}
		};
	};
</script>

<script lang="ts">
    export let projects: Array<ICommercialProject>;

    console.log('cehck value', projects)
    
	onMount(() => {
		isMenuActive.set(false);
	});
</script>

<MetaData
	title={'Commercial works | Hugo Sum'}
	description={'The portfolio of commercial projects for Hugo Sum, a fullstack developer from Hong Kong.'}
	url={`${env.VITE_DOMAIN_NAME}${$page.path}`}
	image={'/cover.jpg'}
/>

<Heading size={1} color={1}>Commercial works</Heading>

<ul class="list" role="list">
{#each projects as {name, link, involvement, description, image, languages}}
    <li>
    <article>
            <Heading size={3} color={2}>
                <a rel="external" href={link}>
                    {name}
                </a>
            </Heading>

			<!-- TODO https://github.com/sveltejs/kit/issues/241#issuecomment-808834850 -->
            <a class="project-inner-item project-image" rel="external" href={link}>
                <img src={image} alt={`Cover image for ${name}`}/>
            </a>

			<LangTagList {languages}/>

            <p class="project-inner-item">{description}</p>
            
            <section>
                <Heading size={4} color={1} tag={"h3"}>
                    Involvement
                </Heading>
                <p>{@html involvement}</p>
            </section>
    </article>
    </li>
{/each}
</ul>

<style>
	.project-image:hover{
		opacity: 0.5;
		transition: opacity var(--time-1);
	}

    .project-inner-item{
		display: block;
        margin-bottom: var(--xs-space);
    }
    
	.list {
		display: grid;
		grid-row-gap: var(--sm-space);
		grid-column-gap: var(--sm-space);
	}

	@media (min-width: 768px) {
		.project-inner-item{
        	margin-bottom: var(--sm-space);
    	}

		.list {
            grid-row-gap: var(--md-space);
            grid-column-gap: var(--md-space);
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1200px) {
		.project-inner-item{
        	margin-bottom: var(--md-space);
    	}

		.list {
            grid-row-gap: var(--lg-space);
            grid-column-gap: var(--lg-space);
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}
</style>
