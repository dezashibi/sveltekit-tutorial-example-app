import { env } from "$env/dynamic/public";
// import { env as prvEnv } from "$env/dynamic/private"; // cannot be done
import type { Load } from "@sveltejs/kit";
// import { secret } from "./secrets.server"; // cannot be done, secret.server.ts must only be used on server
// import { libSecret } from "$lib/server/libSecret"; // cannot be done, anything in lib/server must only be used on server

// this will run after server only code (+page.server.ts) (but will run on both server and the client)
export const load: Load = async ({ data, url, route, params, parent, setHeaders, fetch, depends }) => {

    console.log("+page.ts, data:", data);
    console.log("+page.ts, url:", url);
    console.log("+page.ts, route:", route);
    console.log("+page.ts, params:", params);
    console.log("+page.ts, parent:", await parent());

    fetch('https://dummyjson.com/products');
    fetch('https://dummyjson.com/users');

    depends('app:products');

    console.log(env.PUBLIC_TEST);
    console.log(env.PUBLIC_KEY);

    setHeaders({
        age: '100',
        'cache-control': 'max-age=604800'
    });

    return data;
};