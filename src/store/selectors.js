import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';

const getProducts = (state) => state.products.products;
const getPinned = (state) => state.products.pinned;

export const productsSelector = createSelector(getProducts, getPinned, (products, pinned) => {
    if (isEmpty(pinned) || pinned.pinned) return products

    const filtered = products.filter(item => item !== pinned)
    filtered.unshift({...pinned, pinned: true})
    
    return filtered
})

export const getIsLoading = (state) => state.products.isLoading
export const getError = (state) => state.products.error