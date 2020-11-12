import { useState } from 'react';

import classes from './ProductItem.module.css';

export const useItem = () => {
    const [ isFlipped, setFlipped ] = useState(false)
    const [ showMore, setShowMore ] = useState(false)

    const classInner = isFlipped
        ? `${classes.Inner} ${classes.Flipped}`
        : `${classes.Inner} ${classes.Unflipped}`
    const classBack = showMore
        ? `${classes.Back} ${classes.Show}`
        : classes.Back
    const classOuter = showMore
        ? `${classes.Outer} ${classes.Open}`
        : classes.Outer

    const toggleFlip = () => {
        setFlipped(!isFlipped)
        setShowMore(false)
    }

    const toggleShowMore = (e) => {
        e.stopPropagation()
        setShowMore(!showMore)
    }

    return { classInner, classBack, classOuter, showMore, toggleFlip, toggleShowMore }
}