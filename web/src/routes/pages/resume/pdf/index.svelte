<script lang="ts" context="module">
    import PDFObject from 'pdfobject'
</script>

<script lang="ts">
    const title = "Resume | Hugo Sum"
    const opts = {
        title,
        fallbackLink: false
    }
    
    const res = PDFObject.embed("https://pdf.hugosum.me/resume", undefined, opts)

    if(!res){
        console.log('browser not supported')
    }
</script>

<svelte:head>
    <title>{title}</title>
</svelte:head>
