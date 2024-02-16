import type { Load } from "@sveltejs/kit";



// this will run after server only code (+page.server.ts) (but will run on both server and the client)
export const load: Load = async ({ data, url, route, params, parent, setHeaders }) => {

    console.log("+page.ts, data:", data);
    console.log("+page.ts, url:", url);
    console.log("+page.ts, route:", route);
    console.log("+page.ts, params:", params);
    console.log("+page.ts, parent:", await parent());

    setHeaders({
        age: '100',
        'cache-control': 'max-age=604800'
    });

    return data;
};