<script lang="ts">
	import { page } from '$app/stores';
</script>

<div style:background="#79c8d1" style:padding="10px">
	<h3>Frontend</h3>
	<nav>
		<a href="/">Home</a>
		<a href="/about">About</a>
		{#if !$page.url.pathname.startsWith('/settings')}
			<a href="/settings">Settings</a>
		{/if}
	</nav>

	<slot />
</div>
