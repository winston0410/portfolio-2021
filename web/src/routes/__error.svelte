<script context="module">
	export function load({ error, status }) {
return {
	props: {
		title: `${status}: ${error.message}`
	}
};
	}
</script>

<script>
	export let title;
</script>

<h1>Cache me if you can...But this is a 404!</h1>
