import type { PageData } from "./$types";

// this will run after server only code
export const load: PageData = ({ data }: { data: PageData }) => {
    return data;
};