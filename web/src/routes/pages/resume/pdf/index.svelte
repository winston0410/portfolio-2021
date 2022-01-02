<script lang="ts" context="module">
    import PDFObject from 'pdfobject'
    import { browser } from '$app/env';
</script>

<script lang="ts">
    const title = "Resume | Hugo Sum"
    const opts = {
        title,
        fallbackLink: false
    }

    const PDF_URL = "https://pdf.hugosum.me/resume"
    
    const res = browser ? PDFObject.embed(PDF_URL, undefined, opts) : true

    if(!res){
        window.location.href = PDF_URL
    }
</script>

<svelte:head>
    <title>{title}</title>
    <meta name="robots" content="noindex,nofollow" />
</svelte:head>
