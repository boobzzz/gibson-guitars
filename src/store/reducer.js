const initialState = {
    products: [],
    pinned: {}
}

export const productsReducer = (state = initialState, action) => {
    const { type, payload } = action

    switch (type) {
        case 'GET_PRODUCTS':
            return {
                ...state,
                products: payload.map(item =>
                    ({...item, pinned: false})
                )
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
            // console.log(payload)
            return {
                ...state,
                products: [...state.products, payload]
            }
        default:
            return state
    }
}