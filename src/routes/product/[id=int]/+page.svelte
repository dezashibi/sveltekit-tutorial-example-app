<script lang="ts">
	import { page } from '$app/stores';
	import ProductHeader from './ProductHeader.svelte';
</script>

<ProductHeader />

<p>Product ID: {$page.params.id}</p>

<a href="/product/22333">Other Product</a>
<a href="/">Home</a>

<style>
</style>
