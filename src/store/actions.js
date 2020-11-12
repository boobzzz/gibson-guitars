import { fetchProducts } from '../store/middleware';

export const productsAction = (url) => {
    return fetchProducts(url, 'GET_PRODUCTS')
}

export const pinAction = (item) => {
    return {
        type: 'PIN_ITEM',
        payload: item
    }
}

export const removeAction = (item) => {
    return {
        type: 'REMOVE_ITEM',
        payload: item
    }
}