import { useState, useEffect } from 'react';
import { db } from '../../config/firebaseConfig';

export const useFirestore = (collection) => {
    const [ data, setData ] = useState([])
    const [ fetchError, setFetchError ] = useState(false)

    useEffect(() => {
        const getProducts = db.collection(collection)
        .orderBy('createdAt')
        .onSnapshot(snapshot => {
            let docs = []
            snapshot.forEach(doc => docs.push(doc.data()))
            setData(docs)
        }, () => setFetchError(true))

        return () => getProducts()
    }, [collection])

    return { data, fetchError }
}