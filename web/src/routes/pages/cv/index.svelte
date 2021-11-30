<script context="module" lang="ts">
	import LangTagList from '$lib/LangTagList.svelte';
	import Heading from '$lib/Heading.svelte';
	import MetaData from '$lib/MetaData.svelte';
	import { onMount } from 'svelte';
	import env from '$lib/env';
	import { page } from '$app/stores';
	import createFetch from 'wrapped-fetch';
	import type { UnwrappedResponse } from 'wrapped-fetch';
	import type { ICv } from '$lib/typing';

	export const load = async ({ fetch }) => {
		const f = createFetch(fetch);
		return {
			props: {
				cv: await f('/api/cv')
			}
		};
	};
</script>

<script lang="ts">
	import { isMenuActive } from '$lib/store';
	onMount(() => {
		isMenuActive.set(false);
	});
	export let cv: UnwrappedResponse<ICv>;
</script>

<MetaData
	title={'Curriculum Vitae | Hugo Sum'}
	description={'The Curriculum Vitae for Hugo Sum, a fullstack developer from Hong Kong.'}
	url={`${env.VITE_DOMAIN_NAME}${$page.path}`}
	image={'/cover.jpg'}
/>

<div class="container">
	<Heading size={1} color={1}>Curriculum Vitae</Heading>
	<section>
		<Heading>Professional Profile</Heading>
		<ul class="profile-list" role="list">
			{#each cv.body.profile as text}
				<li class="list-item">{text}</li>
			{/each}
		</ul>
	</section>
	{#if cv.ok}
		<section>
			<Heading>Working experience</Heading>
			<ul role="list">
				{#each cv.body.working_experience as { company_name: name, title, start_date, end_date, duties, technologies }}
					<li class="list-item">
						<article class="experience">
							<Heading tag={'h3'} color={3} size={3}>{name}</Heading>
							<span class="title">{title}</span>
							<div class="experience-date">
								<span>{start_date} - {end_date}</span>
							</div>
							<LangTagList languages={technologies} />
							<ul role="list" class="duty-list">
								{#each duties as duty}
									<li class="duty-list-item">{@html duty}</li>
								{/each}
							</ul>
						</article>
					</li>
				{/each}
			</ul>
		</section>

		<section>
			<Heading>Education</Heading>
			<ul role="list">
				{#each cv.body.education as { school_name: name, title, start_date, end_date }}
					<li class="list-item">
						<article>
							<Heading tag={'h3'} color={3} size={3}>{name}</Heading>
							<span class="title">{title}</span>
							<div>
								<span class="date">{start_date} - {end_date}</span>
							</div>
						</article>
					</li>
				{/each}
			</ul>
		</section>

		<section>
			<Heading>Accomplishments</Heading>
			<ul role="list">
				{#each cv.body.achievement as { name, date, from }}
					<li class="list-item">
						<article>
							<Heading tag={'h3'} color={3} size={3}>{name}</Heading>
							<div>From <span class="title">{from}</span></div>
							<span class="date">{date}</span>
						</article>
					</li>
				{/each}
			</ul>
		</section>
        
		<section>
			<Heading>Languages</Heading>
			<ul class="language-list" role="list">
				{#each cv.body.languages as { name, level }}
					<li class="list-item">
                        <Heading tag={'h3'} color={3} size={3}>{name}</Heading>
                        <span class="competency">{ level }</span>
					</li>
				{/each}
			</ul>
		</section>
	{:else}
		<div>Something wrong with the server.</div>
	{/if}
</div>

<style>
	section {
		margin-bottom: var(--lg-space);
	}

	.title, .competency{
		font-weight: 700;
	}

	.experience-date,
	.date {
		font-size: var(--xs-font);
	}

	.experience-date {
		margin-bottom: var(--sm-space);
	}

	.list-item {
		margin-bottom: var(--md-space);
        width: fit-content;
	}

	.duty-list,
	.profile-list {
		list-style: disc inside;
	}

	.duty-list-item {
		margin-bottom: var(--sm-space);
	}

        
	@media (min-width: 1200px) {
        .language-list {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
	}

</style>
