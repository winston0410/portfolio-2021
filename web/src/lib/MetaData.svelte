<script lang="ts">
export let title: string, description: string, image: string, url: string
</script>

<svelte:head>
<title>{title}</title>
<meta name="description" content={description} />

<meta itemprop="name" content={title} />
<meta itemprop="description" content={description} />
<meta itemprop="image" content={image} />

<meta property="og:url" content={url} />
<meta property="og:type" content="website" />
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:image" content={image} />

<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content={image} />
</svelte:head>
