<script lang="ts">
	import { page } from '$app/stores';
</script>

<nav>
	<a href="/">Home</a>
	<a href="/about">About</a>
	{#if !$page.url.pathname.startsWith('/settings')}
		<a href="/settings">Settings</a>
	{/if}
</nav>

<slot />
