<script context="module" lang="ts">
import { getProps } from '/src/helper'
import LangTagList from '$lib/LangTagList.svelte'
import Title from '$lib/Title.svelte'
import Heading from '$lib/Heading.svelte'
import Subheading from '$lib/Subheading.svelte'
export const load = getProps({ cv: '/api/cv'});
</script>

<script lang="ts">
export let cv
</script>

<svelte:head>
	<title>CV</title>
    <meta name="description" content="" />
</svelte:head>

<style>
    section{
        margin-bottom: var(--lg-space);
    }

    .title{
        font-weight: 700;
    }

    .experience-date,.date{
        font-size: var(--xs-font);
    }
        
    .experience-date{
        margin-bottom: var(--sm-space);
    }

    .list-item{
        margin-bottom: var(--md-space);
    }

    .duty-list{
        list-style: disc inside;
    }

    .duty-list-item{
        margin-bottom: var(--sm-space);
    }
</style>

<div class="container">
    <Title>Curriculum Vitae</Title>
    {#if cv.ok}
    <section>
        <Heading>Working experience</Heading>
    <ul role="list">
            {#each cv.value.working_experience as {company_name: name, title, start_date, end_date, duties, technologies}}
                <li class="list-item">
                    <article class="experience">
                    <Subheading>{name}</Subheading>
                    <span class="title">{title}</span>
                    <div class="experience-date">
                        <span>{start_date} - {end_date}</span>
                    </div>
                    <LangTagList languages={technologies} />
                    <ul role="list" class="duty-list">
                        {#each duties as duty}
                            <li class="duty-list-item">{duty}</li>
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
            {#each cv.value.education as {school_name: name, title, start_date, end_date}}
                <li class="list-item">
                    <article>
                    <h3>{name}</h3>
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
            {#each cv.value.achievement as {name, date, from}}
                <li class="list-item">
                    <article>
                    <h3>{name}</h3>
                    <div>From <span class="title">{from}</span></div>
                    <span class="date">{date}</span>
                    </article>
                </li>
            {/each}
        </ul>
    </section>
    {:else}
    <div>Something wrong with the server.</div>
    {/if}
</div>
