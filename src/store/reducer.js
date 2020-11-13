const initialState = {
    products: [],
    pinned: {},
    filter: '',
    isLoading: true,
    error: '',
}

export const productsReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: payload.map(item =>
                    ({...item, pinned: false})
                ),
                isLoading: false
            }
        case 'GET_PRODUCTS_ERROR':
            return {
                ...state,
                error: payload,
                isLoading: false
            }
        case 'PIN_ITEM':
            return {
                ...state,
                pinned: payload
            }
        case 'REMOVE_ITEM':
            return {
                ...state,
                products: state.products.filter(item =>
                    item !== payload
                )
            }
        case 'ADD_ITEM':
            return {
                ...state,
                products: [...state.products, payload]
            }
        case 'SEARCH_ITEM':
            return {
                ...state,
                filter: payload
            }
        default:
            return state
    }
}