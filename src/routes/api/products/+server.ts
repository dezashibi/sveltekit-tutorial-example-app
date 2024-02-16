import { error, json, type RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async () => {
    const { products } = await (await import('$lib/dummy-products.json')).default;

    // some atuhorization, etc can happen here
    // return new Response(JSON.stringify({ error: 'You are not authorized!' }), {
    //     status: 401
    // });

    // or
    // throw error(401, 'Not authorized');

    return json(products, {
        status: 200
    });

    // return new Response(JSON.stringify(products), {
    //     status: 200
    // });
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