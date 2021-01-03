const initialState = {
    isLoading: true,
    isDisabled: false,
    error: '',
    products: [],
    imgUrl: '',
    pinnedItem: {},
    filter: ''
}

export const productsReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'SET_DISABLED':
            return {
                ...state,
                isDisabled: payload
            }
        case 'GET_URL':
            return {
                ...state,
                isDisabled: false,
                imgUrl: payload
            }
        case 'GET_PRODUCTS':
            return {
                ...state,
                isLoading: false,
                products: payload.map(item => ({...item, pinned: false})),
                imgUrl: ''
            }
        case 'ERROR':
            return {
                ...state,
                isLoading: false,
                error: payload
            }
        case 'PIN_ITEM':
            return {
                ...state,
                pinnedItem: payload.pinned ? {} : payload
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