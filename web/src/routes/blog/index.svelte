<script lang="ts" context="module">
	import globToArray from '$lib/globToArray';
	import Heading from '$lib/Heading.svelte';
	import LangTagList from '$lib/LangTagList.svelte';

	type ITags = {
		[key: string]: boolean;
	};

	type IMetadata = {
		description: string;
		layout: string;
		title: string;
		tags: ITags;
	};

	type IPost = {
		key: string;
		path: string;
		metadata: IMetadata;
	};
</script>

<script lang="ts">
	const modules = import.meta.globEager('./*.md');
	const posts: Array<IPost> = globToArray(modules);
</script>

<div>
	<section>
		<Heading size={1} color={1}>My blog</Heading>
	</section>
	<ul role="list" class="article-list">
		{#each posts as post (post.key)}
			<li>
				<article>
						<Heading size={3} color={2}>
                            <a sveltekit:prefetch href={post.path}>
                                {post.metadata.title}
                            </a>
						</Heading>
					<LangTagList languages={post.metadata.tags} />
					<p>
						{post.metadata.description}
					</p>
				</article>
			</li>
		{/each}
	</ul>
</div>

<style>
	.article-list {
		display: block;
	}

	.article-list li {
		background: var(--base-color-shade1);
	}
</style>
