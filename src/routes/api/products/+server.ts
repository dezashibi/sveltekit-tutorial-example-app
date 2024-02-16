// import { error, json, type RequestHandler } from "@sveltejs/kit";
import { json, type RequestHandler } from "@sveltejs/kit";

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
}