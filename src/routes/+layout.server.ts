import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = () => {
    const user = { name: 'Navid', id: 1 };

    return {
        user
    };
};