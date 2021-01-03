import { storage, db } from '../config/firebaseConfig';

export const storeFile = (file) => async (dispatch) => {
    try {
        const storageRef = storage.ref(file.name)
        
        await storageRef.put(file)
        const url = await storageRef.getDownloadURL()

        dispatch({ type: 'GET_URL', payload: url })
    } catch (err) {
        dispatch({ type: 'ERROR', payload: err })
    }
}

export const storeData = (data) => async (dispatch) => {
    try {
        await db.collection('products').doc(data.id).set(data)
    } catch (err) {
        dispatch({ type: 'ERROR', payload: err })
    }
}

export const removeData = (data) => async (dispatch) => {
    try {
        await db.collection('products').doc(data.id).delete()
    } catch (err) {
        dispatch({ type: 'ERROR', payload: err })
    }
}