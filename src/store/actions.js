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

export const addAction = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}