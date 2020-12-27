import { useState } from 'react';

import classes from './Item.module.css';

export const useFlip = () => {
    const [ isFlipped, setFlipped ] = useState(false)
    
    const classCart = isFlipped
                      ? `${classes.Cart} ${classes.Flipped}`
                      : `${classes.Cart} ${classes.Unflipped}`

    const toggleFlip = () => setFlipped(!isFlipped)

    return { classCart, toggleFlip }
}