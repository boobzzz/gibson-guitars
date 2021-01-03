import { createSelector } from 'reselect';
import { isEmpty } from 'lodash';

export const getIsLoading = (state) => state.products.isLoading
export const getIsDisabled = (state) => state.products.isDisabled
export const getError = (state) => state.products.error
export const getFilter = (state) => state.products.filter
export const getImgUrl = (state) => state.products.imgUrl
export const getPinned = (state) => state.products.pinnedItem

const getProducts = (state) => state.products.products
export const productsSelector = createSelector(getProducts, getPinned, (products, pinnedItem) => {
    if (isEmpty(pinnedItem)) return products

    const filtered = products.filter(item => item !== pinnedItem)
    filtered.unshift({...pinnedItem, pinned: true})

    return filtered
})