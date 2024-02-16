import { error, type NumericRange } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

// this will only run in the server
// then we can keep secret things in the server
export const load: PageServerLoad = async ({ parent, url, route, params, fetch, cookies, getClientAddress, locals, platform, setHeaders }) => {
    console.log("products loaded");

    console.log("+page.server.ts, url:", url);
    console.log("+page.server.ts, route:", route);
    console.log("+page.server.ts, params:", params);
    console.log("+page.server.ts, parent:", await parent());
    console.log("+page.server.ts, cookies:", cookies);
    console.log("+page.server.ts, locals:", locals);
    console.log("+page.server.ts, platform:", platform);
    console.log("+page.server.ts, getClientAddress:", await getClientAddress());
    setHeaders({});

    // const { products, limit, skip, total } = await (await import('$lib/dummy-products.json')).default;

    const response = await fetch('/api/products'); // this knows it is talking to our own server so it will just run the GET function in +server.ts


    if (response.ok) {
        return {
            productsPage: await response.json(),
            title: "Product List",
            description: "Trending product page"
        };
    }

    throw error(response.status as NumericRange<400, 599>, response.statusText);
};