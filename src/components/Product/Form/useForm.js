import { nanoid } from 'nanoid';

import { Loader } from '../../UI/Loader/Loader';
import { timestamp } from '../../../config/firebaseConfig';

export const useForm = (isDisabled, imgUrl, storeProduct) => {
    const btn = isDisabled
                ? <Loader
                    height={16}
                    width={2}
                    radius={1}
                    margin={1}
                    color="#1ABC9C"
                    loading={isDisabled} />
                : 'add item'
        
    const handleSubmit = (values, { resetForm }) => {
        const { name, desc, price } = values

        const itemData = {
            id: nanoid(24),
            name: name,
            desc: desc,
            price: price,
            img: imgUrl,
            createdAt: timestamp()
        }

        storeProduct(itemData)
        resetForm({ values: '' })
    }

    return { btn, handleSubmit }
}