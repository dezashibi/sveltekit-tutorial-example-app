import type { Handle, HandleFetch } from "@sveltejs/kit";
import { sequence } from "@sveltejs/kit/hooks";

// something like middleware
export const handle1: Handle = async ({ event, resolve }) => {
    const response = await resolve(event);

    // data request is when requests are from client __data.json
    console.log("Handle kook in server is called: isDataRequest?", event.isDataRequest);

    response.headers.set('x-custom-header', 'value');

    return response;
}

export const handle2: Handle = async ({ event, resolve }) => {
    const { locals, cookies } = event;

    const token = cookies.get('token');

    locals.user = token ? { name: "Navid", id: 1 } : undefined;

    // now anywhere in any code that locals is available we have access to this

    const response = await resolve(event);

    return response;
}

// chaining handles together as a sequence
export const handle = sequence(handle1, handle2);


export const handleFetch: HandleFetch = ({ request, event, fetch }) => {
    // maybe we need some authorization or authentication before fetching, etc.

    console.log("fetch hook", event);

    if (request.url.startsWith('https://dummyjson.com/')) {
        console.log("Fetch Hook: Here comes some dummy data!!!");
    }

    return fetch(request);
}