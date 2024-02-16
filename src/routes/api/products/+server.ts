import { API_URL } from "$env/static/private";
import type { RequestHandler } from "./$types";
import { error, json, type NumericRange } from "@sveltejs/kit";

export const GET: RequestHandler = async ({ fetch }) => {
    // const { products } = await (await import('$lib/dummy-products.json')).default;

    const response = await fetch(`${API_URL}/products`);
    const status = response.status as NumericRange<400, 599>;

    // some atuhorization, etc can happen here
    // return new Response(JSON.stringify({ error: 'You are not authorized!' }), {
    //     status: 401
    // });

    // or
    //throw error(401, 'Not authorized');

    if (response.ok) {
        const products = await response.json();
        return json(products, {
            status
        });
        // return new Response(JSON.stringify(products), {
        //     status: 200
        // });
    }

    throw error(status, response.statusText);
};

export const POST: RequestHandler = async ({ request }) => {
    const product = await request.json();

    console.log(product);

    if (!product.title) {
        throw error(400, 'product title is required');
    }

    return json({ product, success: true }, {
        status: 201
    });
}