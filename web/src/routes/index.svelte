<script context="module" lang="ts">
  console.log('check once')
  import "/src/modern-normalize.css"
  import "/src/app.css"

  import { getProps } from "/src/helper"
  import glory from "/src/cssRenderer"
  import { xsFont, smFont, smMb } from "/src/styles/base"
  import color from "/src/styles/color"

  console.log('check glory', glory.raw)

  //  const style = glory.virtual({
    //  fontFamily: "VT323",
    //  fontSize: "160px",
    //  fontWeight: "400"
  //  })

  import NavBar from "/src/components/NavBar.svelte"
  
  export const load = getProps({ pages: '/api/states/nav-bar'});
</script>

<script lang="ts">
  export let pages;
  //  pages = pages.value
  //  console.log(pages)
  pages = [{ name: "dumy", url: "/"}, {name: "ste", url: "/"}]
</script>

<div class={glory.virtual({
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
})}>
<h1 class={glory.virtual({
    fontSize: "80px",
    fontFamily: "VT323",
    fontWeight: "normal",
    "@media (min-width: 768px)": {
      fontSize: "120px"
    }
})}>Hugo Sum</h1>
<span class={glory.virtual({...smFont, textAlign: "center"})}>Fullstack developer from Hong Kong</span>
</div>

<nav>
    <ul class={glory.virtual({
    display: "flex",
        flexDirection: "column"
    })}>
	{#each pages as { name, url }}
		<li class={glory.virtual({
        ...smMb
        })}>
        <a class={glory.virtual({
            width: "100%",
            display: "flex",
            justifyContent: "center",
            color: color.highlight
        })} href={url}>
            <span class={glory.virtual(xsFont)}>{name}</span>
		</a>
        </li>
	{/each}
    </ul>
</nav>
