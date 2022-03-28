<script context="module" lang="ts">
	import MarkDownIt from 'markdown-it';
	import { isMenuActive } from '$lib/store';
	import { onMount } from 'svelte';
	import Heading from '$lib/Heading.svelte';
	import type { ICommercialProjectWithSrcset } from '$lib/typing';
	import LangTagList from '$lib/LangTagList.svelte';
	//TODO Make Typescript aware of $static and query string
	// @ts-ignore
	import smartGoCover from '$static/smartgo.png?w=300;768;1200&format=webp&srcset';
	// @ts-ignore
	import survivalistCover from '$static/survivalist.png?w=300;768;1200&format=webp&srcset';
	// @ts-ignore
	import teckyCodeCover from '$static/tecky-code.png?w=300;768;1200&format=webp&srcset';
	// @ts-ignore
	import trustedNodeCover from '$static/trusted-node.png?w=300;768;1200&format=webp&srcset';
	// @ts-ignore
	import perfectMenCover from '$static/perfect-men.png?w=300;768;1200&format=webp&srcset';
	// @ts-ignore
	import homanCover from '$static/homan.png?w=300;768;1200&format=webp&srcset';
	// @ts-ignore
	import cantoneseCover from '$static/howtostudycantonese.png?w=300;768;1200&format=webp&srcset';
	// @ts-ignore
	import hackneySocialCareCover from '$static/hackney-social-care.png?w=300;768;1200&format=webp&srcset';
	// @ts-ignore
	//  import hackneyFinanceCover from '$static/hackney-finance.png?w=300;768;1200&format=webp&srcset';

	export const load = async ({ fetch }) => {
		const res = await fetch('/api/commercial');

		if (!res.ok) {
			return {
				status: 500
			};
		}

		const body = await res.json();

		const srcsetDict = {
			'/perfect-men.png': perfectMenCover,
			'/trusted-node.png': trustedNodeCover,
			'/smartgo.png': smartGoCover,
			'/tecky-code.png': teckyCodeCover,
			'/homan.png': homanCover,
			'/survivalist.png': survivalistCover,
			'/howtostudycantonese.png': cantoneseCover,
			'/hackney-social-care.png': hackneySocialCareCover
			//  '/hackney-finance.png': hackneyFinanceCover
		};

		const transformed = await Promise.all(
			body.map(async (work) => {
				return {
					...work,
					srcset: srcsetDict[work.image]
				};
			})
		);

		return {
			props: {
				projects: transformed
			},
			stuff: {
				title: 'Commercial works | Hugo Sum',
				description:
					'The portfolio of commercial projects for Hugo Sum, a fullstack developer from Hong Kong.',
				image: '/cover.jpg'
			}
		};
	};
</script>

<script lang="ts">
	import MarkdownIt from 'markdown-it';

	export let projects: Array<ICommercialProjectWithSrcset>;

	onMount(() => {
		isMenuActive.set(false);
	});
</script>

<Heading size={1} color={1}>Commercial works</Heading>

<ul class="list" role="list">
	{#each projects as { name, link, involvements, description, image, languages, srcset }}
		<li>
			<article>
				<Heading size={3} color={2} maxHeight>
					<a rel="external" title={`${name}`} href={link}>
						{name}
					</a>
				</Heading>

				<!-- TODO https://github.com/sveltejs/kit/issues/241#issuecomment-808834850 -->
				<a class="project-inner-item project-image" rel="external" title={`${name}`} href={link}>
					<picture>
						<source {srcset} type="image/webp" />
						<!-- Hardcode here to reflect the aspect ratio -->
						<img width="337" height="193" src={image} alt={`Cover image for ${name}`} />
					</picture>
				</a>

				<LangTagList {languages} />

				<p class="project-inner-item">{description}</p>

				<section>
					<Heading size={4} color={1} tag={'h3'}>Involvement</Heading>
					<ul class="involvement-list">
						{#each involvements as involvement}
							<li>{@html new MarkdownIt().renderInline(involvement)}</li>
						{/each}
					</ul>
				</section>
			</article>
		</li>
	{/each}
</ul>

<style>
	.project-image:hover {
		opacity: 0.5;
		transition: opacity var(--time-1);
	}

	.project-inner-item {
		display: block;
		margin-bottom: var(--xs-space);
	}

	.list {
		display: grid;
		grid-row-gap: var(--sm-space);
		grid-column-gap: var(--sm-space);
	}

	@media (min-width: 768px) {
		.project-inner-item {
			margin-bottom: var(--sm-space);
		}

		.list {
			grid-row-gap: var(--md-space);
			grid-column-gap: var(--md-space);
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}

	@media (min-width: 1200px) {
		.project-inner-item {
			margin-bottom: var(--md-space);
		}

		.list {
			grid-row-gap: var(--lg-space);
			grid-column-gap: var(--lg-space);
			grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		}
	}

	@media print {
		.project-inner-item {
			margin-bottom: var(--md-space);
		}

		/* Cannot use flexbox correctly in print */
		/* https://stackoverflow.com/questions/20408033/how-to-get-page-break-inside-avoid-to-work-nicely-with-flex-wrap-wrap */
		.list {
			display: table;
		}

		.list li {
			display: inline-block;
			max-width: 48%;
			vertical-align: top;
		}

		.list li:nth-child(odd) {
			margin-right: 2%;
		}
	}

    .involvement-list {
        list-style: disc;
        padding-left: 1rem;
    }
</style>
