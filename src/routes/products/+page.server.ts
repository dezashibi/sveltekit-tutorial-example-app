import type { PageServerLoad } from './$types';

// this will only run in the server
// then we can keep secret things in the server
export const load: PageServerLoad = async () => {
    console.log("products loaded");
    const { products, limit, skip, total } = await (await import('$lib/dummy-products.json')).default;

    return {
        productPage: {
            products,
            skip,
            limit,
            total
        },
        title: "Product List"
    };
}