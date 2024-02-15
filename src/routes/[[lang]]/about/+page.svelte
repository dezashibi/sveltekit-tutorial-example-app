<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';

	let name = 'Navid';
</script>

<h1>About {name}</h1>

{JSON.stringify($page.params)}
<br />
<button
	on:click={() => {
		goto('/');
	}}
>
	Go to Home Page
</button>

<style>
</style>
