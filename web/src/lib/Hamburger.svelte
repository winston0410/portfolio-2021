<script lang="ts">
interface IBarOpts {
    thickness: string,
    radius: string
}

export let isActive:boolean
export let barOpts: IBarOpts

const defaultBarOpts: IBarOpts = {
    thickness: "7%",
    radius: "3"
}

let _barOpts = {
    ...defaultBarOpts,
    ...barOpts
}

</script>

<svg viewBox="0 0 70 70" width="28" height="28">
  <symbol id="bar">
      <title>Bar</title>
      <desc>Bar for forming hamburger menu button</desc>
      <rect width="100%" height={_barOpts.thickness} rx={_barOpts.radius}></rect>
  </symbol>
  <g class={`hamburger ${isActive ? "active" : "inactive"}`} id="hamburger">
      <title>Hamburger icon</title>
      <desc>The hamburger icon for toggling menu</desc>
      <use id="bar-1" y="10" xlink:href="#bar" />
      <use id="bar-2" y="30" xlink:href="#bar" />
      <use id="bar-3" y="50" xlink:href="#bar" />
      <!--  <animate xlink:href=".active #bar-1" begin=""/>  -->
      <!--  <animate xlink:href=".active #bar-2" begin=""/>  -->
      <!--  <animate xlink:href=".active #bar-3" begin=""/>  -->
  </g>
</svg>
