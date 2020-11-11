const initialState = {
    products: []
}

export const productsReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: payload
            }
    
        default:
            return state
    }
}