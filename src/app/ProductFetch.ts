import Iproduct  from '../Interfaces/Iproduct';
// const apiURL = process.env.NEXT_PUBLIC_API_URL;
const apiURL = "https://gio.1rodemayo.com";
export const fetchProducts = async (): Promise<Iproduct[]> => {
    try {
        const response = await fetch(`${apiURL}/products`, {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Failed to fetch products');
        }

        const products: Iproduct[] = await response.json();
        return products;
    } catch (error: any) {
        throw new Error(error.message || 'Something went wrong');
    }
}

export const fetchProductById = async (id:string) => {
    try {
        const products = await fetchProducts();
        const product = products.find(product => product.id?.toString() === (id));

        if (!product) {
            throw new Error('Product not found');
        }

        return product;
    } catch (error: unknown) {
        if (error instanceof Error) {
            throw new Error(error.message || 'Something went wrong');
        } else {
            throw new Error('An unexpected error occurred');
        }
    }
}