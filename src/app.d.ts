// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        interface PageData {
            productPage: {
                products?: {
                    id: number,
                    title: string,
                    description: string,
                    price: number,
                    discountPercentage: number,
                    rating: number,
                    stock: number,
                    brand: string,
                    category: string,
                    thumbnail: string,
                    images: string[],
                }[],
                total?: number,
                skip?: number,
                limit?: number,
            },
            title?: string
        }
        // interface PageState {}
        // interface Platform {}
    }
}

export { };
