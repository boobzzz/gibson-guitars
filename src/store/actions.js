export const pinAction = (item) => ({ type: 'PIN_ITEM', payload: item })
export const removeAction = (item) => ({ type: 'REMOVE_ITEM', payload: item})
export const addAction = (item) => ({ type: 'ADD_ITEM', payload: item })
export const searchAction = (value) => ({ type: 'SEARCH_ITEM', payload: value })