<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>Admin</h1>

<nav>
	<a href="/">Home</a>
	{#if !$page.url.pathname.startsWith('/settings')}
		<a href="/settings">Settings</a>
	{/if}
</nav>

<slot />
