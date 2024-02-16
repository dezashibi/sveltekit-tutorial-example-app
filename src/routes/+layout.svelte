<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<svelte:head>
	<title>{$page.data.title || 'Shop'}</title>
	<meta name="description" content={$page.data.description || 'trending shop page'} />
</svelte:head>

<div style:background="#f03" style:padding="10px">
	<h3>
		Root Layout |
		<a href="/products">Products</a>
		{#if data.user}
			| Logged in as {data.user.name}
			<button
				on:click={async () => {
					const response = await fetch('/api/logout', { method: 'POST' });
					if (response.ok) {
						invalidateAll();
					}
				}}>Logout</button
			>
		{:else}
			| <a href="/login">Login</a>
		{/if}
	</h3>

	<slot />

	<footer style:margin-top="60px">Made using Sveltkit.</footer>
</div>
