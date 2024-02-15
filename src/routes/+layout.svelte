<script lang="ts">
	import { page } from '$app/stores';
</script>

<div style:background="#f03" style:padding="10px">
	<h3>Root Layout</h3>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		{#if !$page.url.pathname.startsWith('/settings')}
			<a href="/settings">Settings</a>
		{/if}
	</nav>
	<slot />

	<footer style:margin-top="60px">Made using Sveltkit.</footer>
</div>
