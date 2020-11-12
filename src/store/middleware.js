import { fetchJSON } from '../utils/api/fetch';

export const fetchProducts = (url, type) => async (dispatch) => {
    try {
        const resp = await fetchJSON(url)
        const data = resp.body
    
        dispatch({ type: 'GET_PRODUCTS', payload: data })
    } catch (error) {
        dispatch({ type: 'GET_PRODUCTS_ERROR', payload: error })
    }
}