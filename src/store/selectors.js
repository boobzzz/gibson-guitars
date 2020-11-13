import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';

const getProducts = (state) => state.products.products;
export const getPinned = (state) => state.products.pinnedItem;

export const productsSelector = createSelector(getProducts, getPinned, (products, pinnedItem) => {
    if (isEmpty(pinnedItem)) return products

    const filtered = products.filter(item => item !== pinnedItem)
    filtered.unshift({...pinnedItem, pinned: true})

    return filtered
})
    
export const getFilter = (state) => state.products.filter
export const getIsLoading = (state) => state.products.isLoading
export const getError = (state) => state.products.error