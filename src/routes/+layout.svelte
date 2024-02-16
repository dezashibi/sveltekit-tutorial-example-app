<script lang="ts">
	import { applyAction, enhance } from '$app/forms';
	import { invalidateAll } from '$app/navigation';
	import { page } from '$app/stores';
	import type { SubmitFunction } from '@sveltejs/kit';
	import type { LayoutData } from './$types';
	import type { ActionData } from './login/$types';

	export let data: LayoutData;

	let form: ActionData;
	let isLoading = false;

	const handleLogin: SubmitFunction = () => {
		isLoading = true;

		return ({ result }) => {
			if (result.type === 'redirect') {
				applyAction(result);
			} else if (result.type === 'error') {
				// do something
			} else {
				form = result.data as ActionData;
				isLoading = false;
			}
		};
	};
</script>

<svelte:head>
	<title>{$page.data.title || 'Shop'}</title>
	<meta name="description" content={$page.data.description || 'trending shop page'} />
</svelte:head>

<div style:background="#f03" style:padding="10px">
	<h3>
		Root Layout |
		<a href="/products" data-sveltekit-preload-data="hover">Products</a>
		{#if data.user}
			| Logged in as {data.user.name}
			<!-- <button
				on:click={async () => {
					const response = await fetch('/api/logout', { method: 'POST' });
					if (response.ok) {
						invalidateAll();
					}
				}}>Logout</button
			> -->
			<form method="POST" action="/login?/logout&redirectTo={$page.url.pathname}" use:enhance>
				<button type="submit">Logout</button>
			</form>
		{:else}
			| <a href="/login">Login</a>
		{/if}
	</h3>
	<hr />
	<form method="GET" action="/search">
		Search: <input type="text" name="q" />
	</form>

	<br />

	<slot />

	{#if !data.user && $page.url.pathname !== '/login'}
		<form
			method="POST"
			action="/login?/login&redirectTo={$page.url.pathname}"
			use:enhance={handleLogin}
		>
			<input id="username" name="username" placeholder="Username" value={form?.username || ''} />
			{#if form?.usernameMissing}
				<p style="margin-bottom: 0;">Username is required</p>
			{/if}
			<br /><br />
			<input
				id="password"
				name="password"
				placeholder="Password"
				type="password"
				value={form?.password || ''}
			/>
			{#if form?.passwordMissing}
				<p style="margin-bottom: 0;">Password is required</p>
			{/if}
			<br /><br />
			<button type="submit" disabled={isLoading}>Login</button>
		</form>
	{/if}

	<footer style:margin-top="60px">Made using Sveltkit.</footer>
</div>
