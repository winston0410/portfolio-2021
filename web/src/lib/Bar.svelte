<script lang="ts">
    interface IOpts {
        id: string;
        y: string;
    }
	export let opts: IOpts;

	const defaultOpts = {
		height: '7%',
		rx: '3'
	};

	let withDefault = {
		...defaultOpts,
		...opts
	};
</script>

<style>
    .default{
        transition: transform 0.5s, opacity 0.25s;
    }
</style>

<rect width="100%" class="default" {...withDefault}  />
