import { fetchJSON } from '../utils/api/fetch';

export const fetchProducts = (url, type) => async (dispatch) => {
    const resp = await fetchJSON(url)
    const data = resp.body

    dispatch({
        type: type,
        payload: data
    })
}