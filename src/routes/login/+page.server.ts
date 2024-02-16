import { fail, type Actions, redirect } from "@sveltejs/kit";

export const actions: Actions = {
    login: async ({ request, cookies, url, locals }) => {
        const form = await request.formData();
        const username = form.get('username');
        const password = form.get('password');

        await new Promise(resolve => setTimeout(resolve, 2000));

        const errors = {
            username,
            password,
            usernameMissing: false,
            passwordMissing: false
        };

        if (!username) {
            errors.usernameMissing = true;
        }

        if (!password) {
            errors.passwordMissing = true;
        }

        if (errors.usernameMissing || errors.passwordMissing) {
            return fail(401, errors);
        }

        cookies.set('token', 'token value', {
            path: "/"
        });

        // because we used this approach we need to do this as hooks are not guaranteed to run as expected anymore
        locals.user = { name: "Navid", id: 1 };

        throw redirect(303, url.searchParams.get('redirectTo') || '/products');
    },
    logout: ({ cookies, url, locals }) => {
        cookies.delete('token', { path: '/' });

        // because we used this approach we need to do this as hooks are not guaranteed to run as expected anymore
        locals.user = undefined;

        throw redirect(303, url.searchParams.get('redirectTo') || '/products');
    }
}