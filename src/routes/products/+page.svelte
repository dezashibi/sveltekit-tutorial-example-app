<script lang="ts">
	import { invalidate } from '$app/navigation';

	export let data: App.PageData;

	$: console.log('page', data);

	$: products = data.productsPage!.products;
</script>

<h2>{data.title}</h2>

<button
	on:click={() => {
		// any endpoint's load function that has dependency on this url will be run
		// invalidate('https://dummyjson.com/products');

		// or we can use this custom identifer we have defined using depends function in load functions
		invalidate('app:products');

		// or
		// invalidate((url) => {
		// 	return url.hostname === 'dummyjson.com';
		// });
	}}
>
	Rerun load function
</button>

{#if products && products.length > 0}
	<ul>
		{#each products as product}
			<li>
				<img src={product.thumbnail} alt={product.title} />
				<h3><a href="/products/{product.id}">{product.title}</a></h3>
				<p>{product.description}</p>
			</li>
		{/each}
	</ul>
{/if}

<style>
	ul {
		padding: 0;
		margin: 0;
		list-style: none;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: 30px;
	}

	img {
		width: 100%;
	}
</style>
