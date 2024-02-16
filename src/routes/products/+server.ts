import { json, type RequestHandler } from "@sveltejs/kit";

// putting this file here means that
// when the client 'accept' application/json this file will be called
// when the client 'accept' text/html the +page.svelte will be returned

export const GET: RequestHandler = async () => {
    const { products } = await (await import('$lib/dummy-products.json')).default;

    return json(products, {
        status: 200
    });
}