import type { PageLoad } from './$types';

// this will also run in the server
export const load: PageLoad = async () => {
    console.log("products loaded");
    const { products, limit, skip, total } = await (await import('$lib/dummy-products.json')).default;

    return {
        productPage: {
            products,
            skip,
            limit,
            total
        }
    };
}