// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces

interface Product {
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
}

declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        interface PageData {
            productsPage?: {
                products?: Product[],
                total?: number,
                skip?: number,
                limit?: number,
            },
            productPage?: {
                product: Product
            }
            title?: string
            user?: {
                id: number,
                name: string,
            }
        }
        // interface PageState {}
        // interface Platform {}
    }
}

export { };
