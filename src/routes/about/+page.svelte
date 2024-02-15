<script lang="ts">
	import { goto } from '$app/navigation';

	let name = 'Navid';
</script>

<h1>About {name}</h1>

<button
	on:click={() => {
		goto('/');
	}}
>
	Go to Home Page
</button>

<style>
</style>
