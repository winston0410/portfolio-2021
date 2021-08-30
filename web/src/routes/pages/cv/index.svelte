<script context="module" lang="ts">
import { getProps } from '/src/helper'
import LangTagList from '$lib/LangTagList.svelte'
export const load = getProps({ cv: '/api/cv'});
</script>

<script lang="ts">
export let cv
console.log('check cv', cv)
</script>

<svelte:head>
	<title>CV</title>
    <meta name="description" content="" />
</svelte:head>

<style>
    .container {
        --titleSize: var(--xl-font);
        --headingSize: var(--lg-font);
        --headingColor: var(--highlight-color);
        --headingMarginBottom: var(--md-space);
        --subheadingSize: var(--md-font);
        --subheadingColor: var(--highlight-color-tint1);
        --subheadingMarginBottom: var(--sm-space);
    }
        
@media (min-width: 1200px){
    .container{
        --titleSize: var(--xxl-font);
        --headingSize: var(--xl-font);
        --subheadingSize: var(--lg-font);
    }
}

    h1{
        font-size: var(--titleSize);
    }
        
    h2{
        color: var(--headingColor);
        font-size: var(--headingSize);
        margin-bottom: var(--headingMarginBottom);
    }

    h3{
        color: var(--subheadingColor);
        font-size: var(--subheadingSize);
        margin-bottom: var(--subheadingMarginBottom);
    }

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
    <h1>Curriculum Vitae</h1>
    {#if cv.ok}
    <section>
        <h2>Working experience</h2>
    <ul role="list">
            {#each cv.value.working_experience as {company_name: name, title, start_date, end_date, duties, technologies}}
                <li class="list-item">
                    <article class="experience">
                    <h3>{name}</h3>
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
        <h2>Education</h2>
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
        <h2>Accomplishments</h2>
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
