// import { error, redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// this will only run in the server
// then we can keep secret things in the server
export const load: PageServerLoad = async ({ params }) => {
    console.log("products loaded, id :", params.id);

    const { products } = await (await import('$lib/dummy-products.json')).default;

    const product = products.find(p => p.id === +params.id);

    if (!product) {
        throw error(404, { message: "Product not found", code: 'NOT_FOUND' });

        // throw redirect(301, '/products');
    }

    return {
        productPage: {
            product
        },
        title: `${product?.title} Information`,
        description: `best price for ${product.title}, ${product.description}`
    };
}