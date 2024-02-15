import type { PageServerLoad } from './$types';

// this will only run in the server
// then we can keep secret things in the server
export const load: PageServerLoad = async ({ parent }) => {
    console.log("products loaded");

    const parentData = await parent();

    console.log(parentData);

    const { products, limit, skip, total } = await (await import('$lib/dummy-products.json')).default;

    return {
        productsPage: {
            products,
            skip,
            limit,
            total
        },
        title: "Product List"
    };
}