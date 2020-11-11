import { useState } from 'react';

import classes from './ProductItem.module.css';

export const ProductItem = ({ data }) => {
    const [ isFlipped, setFlipped ] = useState(false)
    const [ showMore, setShowMore ] = useState(false)

    const classInner = isFlipped
        ? `${classes.Inner} ${classes.Flipped}`
        : `${classes.Inner} ${classes.Unflipped}`
    const classBack = showMore
        ? `${classes.Back} ${classes.Show}`
        : classes.Back
    const classOuter = showMore
        ? `${classes.Outer} ${classes.Active}`
        : classes.Outer

    const toggleFlip = () => {
        setFlipped(!isFlipped)
        setShowMore(false)
    }

    const toggleShowMore = (e) => {
        e.stopPropagation()
        setShowMore(!showMore)
    }

    return (
        <div key={data.id} className={classOuter}>
            <div className={classInner} onClick={toggleFlip}>
                <div className={classes.Front}>
                    <div>
                        <img src={data.img} alt=""/>
                    </div>
                    <div>
                        <h4>{data.name}</h4>
                        <span>{`$ ${data.price}`}</span>
                    </div>
                </div>
                <div className={classBack}>
                    <h4>Overview:</h4>
                    <div><p>{data.desc}</p></div>
                    <button onClick={toggleShowMore}>
                        {!showMore ? '...show more' : '...show less'}
                    </button>
                </div>
            </div>
        </div>
    )
}