<script lang="ts">
    import "/src/app.css"

  import glory from "/src/cssRenderer"

  const style = glory.virtual({
    fontFamily: "VT323",
    fontSize: "40px",
  })
</script>

<h1 class={style}>Hello</h1>
