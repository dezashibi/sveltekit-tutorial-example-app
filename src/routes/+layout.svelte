<script lang="ts">
	import type { LayoutData } from './$types';

	export let data: LayoutData;
</script>

<div style:background="#f03" style:padding="10px">
	<h3>
		Root Layout
		{#if data.user}
			| Logged in as {data.user.name}
		{/if}
	</h3>

	<slot />

	<footer style:margin-top="60px">Made using Sveltkit.</footer>
</div>
