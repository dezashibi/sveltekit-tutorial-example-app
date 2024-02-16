import type { PageData } from "./$types";

// this will run after server only code (but will run on both server and the client)
export const load: PageData = ({ data }: { data: PageData }) => {
    return data;
};