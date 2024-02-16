import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = ({ cookies, locals }) => {
    console.log(cookies);
    // const token = cookies.get('token');
    // console.log(`token ${token}`);

    // // get user from the token
    // const user = { name: 'Navid', id: 1 };

    // return {
    //     user: token ? user : undefined
    // };

    // we handled these using locals now
    console.log("layout", locals.user);
    return {
        user: locals.user
    }
};