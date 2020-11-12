import { connect } from 'react-redux';
import { pinAction, removeAction } from '../../../store/actions';
import { VscPin, VscPinned, VscTrash } from "react-icons/vsc";
import { useItem } from './useItem';

import classes from './Item.module.css';

const ProductItem = ({ data, setPinned, setRemove }) => {
    const { classInner, classBack, classOuter, showMore, toggleFlip, toggleShowMore } = useItem()

    const pinItem = (e, item) => {
        e.stopPropagation()
        setPinned(item)
    }

    const removeItem = (e, item) => {
        e.stopPropagation()
        setRemove(item)
    }

    return (
        <div className={classOuter}>
            <div className={classInner} onClick={toggleFlip}>
                <div className={classes.Front}>
                    <div>
                        <img src={data.img} alt=""/>
                    </div>
                    <div>
                        <div className={classes.FrontHeader}>
                            <h4>{data.name}</h4>
                            <div className={classes.Icons}>
                                {!data.pinned
                                ? <span onClick={(e) => pinItem(e, data)}><VscPin /></span>
                                : <span onClick={(e) => pinItem(e, data)}><VscPinned /></span>}
                                <span onClick={(e) => removeItem(e, data)}><VscTrash /></span>
                            </div>
                        </div>
                        <span>{`$ ${data.price}`}</span>
                    </div>
                </div>
                <div className={classBack}>
                    <div className={classes.BackHeader}>
                        <h4>Model overview:</h4>
                    </div>
                    <div className={classes.BackDesc}>
                        <p>{data.desc}</p>
                    </div>
                    <button onClick={toggleShowMore}>
                        {!showMore ? '...show more' : '...show less'}
                    </button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setPinned: (item) => dispatch(pinAction(item)),
        setRemove: (item) => dispatch(removeAction(item))
    }
}

export default connect(null, mapDispatchToProps)(ProductItem);