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

interface User {
    id: number,
    name: string,
}

declare global {
    namespace App {
        // interface Error {}
        interface Locals {
            user?: User
        }
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
            title?: string,
            description?: string,
            user?: User
        }
        // interface PageState {}
        // interface Platform {}
    }
}

export { };
