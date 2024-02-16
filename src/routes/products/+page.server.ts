import { error, type NumericRange } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { env } from '$env/dynamic/private';
import { env as pubEnv } from '$env/dynamic/public';
import { API_KEY, TEST } from '$env/static/private';
import { PUBLIC_KEY, PUBLIC_TEST } from '$env/static/public';
import { secret } from './secrets.server';
import { libSecret } from '$lib/server/libSecret';

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

    // dynamically at runtime, if the values are changed no need to rebuild
    console.log("Private Env:", env.TEST);
    console.log("Private Env:", env.API_KEY);
    console.log("Public Env:", pubEnv.PUBLIC_KEY);
    console.log("Public Env:", pubEnv.PUBLIC_TEST);

    // at compile time, if the values are changed we need to rebuild
    // also in this method the .env is guaranteed to be loaded
    console.log("Static Private Env:", TEST);
    console.log("Static Private Env:", API_KEY);
    console.log("Static Public Env:", PUBLIC_KEY);
    console.log("Static Public Env:", PUBLIC_TEST);

    console.log("some secret from secret.server.ts", secret);
    console.log("some secret from libSecret", libSecret);

    if (response.ok) {
        return {
            productsPage: await response.json(),
            title: "Product List",
            description: "Trending product page"
        };
    }

    const errorJson = await response.json();

    throw error(response.status as NumericRange<400, 599>, errorJson.message);
};