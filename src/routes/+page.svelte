<script lang="ts">
	import { afterNavigate, beforeNavigate, goto } from '$app/navigation';
	import { navigating } from '$app/stores';
	import { Button } from '$components';

	beforeNavigate((navigation) => {
		console.log('before navigate', navigation);

		// navigation.cancel(); // canceling the navigation in certain conditions

		// example canceling back/forward button
		if (navigation.type === 'popstate') {
			navigation.cancel();
		}
	});

	afterNavigate((navigation) => {
		console.log('after navigate', navigation);
	});

	$: console.log($navigating);
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<button
	on:click={() => {
		goto('/about');
	}}
>
	Go to About Page
</button>

<button
	on:click={() => {
		goto('/file/a/b/c/d');
	}}
>
	Go to File Page
</button>

<Button />

<a href="/product/22333">Product</a>
