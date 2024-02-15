<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: product = data.productPage.product;
</script>

<img src={product?.thumbnail} alt={product?.title} />

<h1>{data.title}</h1>

<p>{product?.description}</p>

<a href="/products">Products Home</a>

<style>
	img {
		width: 100%;
	}
</style>
