import { fetchProducts } from '../store/middleware';

export const productsAction = (url) => {
    return fetchProducts(url, 'GET_PRODUCTS')
}