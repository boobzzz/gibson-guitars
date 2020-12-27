import { useRef } from 'react';
import { connect } from 'react-redux';
import { VscPin, VscPinned, VscTrash, VscFoldUp, VscFoldDown } from 'react-icons/vsc';

import { getPinned } from '../../../store/selectors';
import { pinAction, removeAction } from '../../../store/actions';
import { useFlip } from './useFlip';
import { useIcons } from './useIcons';
import { use3D } from './use3D';
import item_img from '../../../assets/images/prod_img_aj.png';
import bg_img from '../../../assets/images/logo_bg.jpg';
import classes from './Item.module.css';

const ProductItem = ({ data, pinnedItem, setItemPinned, setRemove }) => {
    const cartRef = useRef()
    const { classCart, toggleFlip } = useFlip()
    const { isPinnedMsg, pinItem, removeItem } = useIcons(data, pinnedItem, setItemPinned, setRemove, cartRef)
    const { mouseMoveHandler, animateIn, animateOut } = use3D(cartRef)

    return (
        <div
            className={classes.Wrapper}
            onMouseMove={mouseMoveHandler}
            onMouseEnter={animateIn}
            onMouseLeave={animateOut}>
            <div className={classes.Container} ref={cartRef}>
                {isPinnedMsg && <span>Only one pinned item allowed</span>}
                <div className={classCart} onClick={toggleFlip}>
                    <div className={classes.Front}>
                        <div className={classes.Header}>
                            <h3>{data.name}</h3>
                            <div className={classes.Icons}>
                                {!data.pinned
                                ? <span onClick={pinItem}><VscPin /></span>
                                : <span onClick={pinItem}><VscPinned /></span>}
                                <span onClick={removeItem}><VscTrash /></span>
                            </div>
                        </div>
                        <div  className={classes.Img}>
                            <img src={item_img} alt=""/>
                        </div>
                        <div className={classes.BgImg}>
                            <img src={bg_img} alt=""/>
                        </div>
                        <div className={classes.Price}>
                            <span>{`$ ${data.price}`}</span>
                        </div>
                    </div>
                    <div className={classes.Back}>
                    <div className={classes.BackHeader}>
                        <h4>Model overview:</h4>
                    </div>
                    <div className={classes.BackDesc}>
                        <p>{data.desc}</p>
                    </div>
                    <div className={classes.BackScroll}>
                        <span className={classes.Arrow}><VscFoldUp /></span>
                        <span className={classes.Text}>scroll</span>
                        <span className={classes.Arrow}><VscFoldDown /></span>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pinnedItem: getPinned(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setItemPinned: (item) => dispatch(pinAction(item)),
        setRemove: (item) => dispatch(removeAction(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);