<script lang="ts">
	import { page } from '$app/stores';
</script>

<h1>Custom Error page: /routes/products/[id]/+error.svelte</h1>
<h2>{$page.status} - {$page.error?.code}: {$page.error?.message}</h2>
