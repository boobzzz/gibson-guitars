import { useRef } from 'react';
import { connect } from 'react-redux';
import { VscPin, VscPinned, VscTrash } from 'react-icons/vsc';

import { getPinned } from '../../../store/selectors';
import { pinAction, removeAction } from '../../../store/actions';
import { useFlip } from './useFlip';
import { useIcons } from './useIcons';
import { use3D } from './use3D';
import { Scrollbars } from 'react-custom-scrollbars';
import bg_img from '../../../assets/images/logo_bg.jpg';
import classes from './Item.module.css';

const ProductItem = ({ data, pinnedItem, pinItem, removeItem }) => {
    const cartRef = useRef()
    const { classCart, toggleFlip } = useFlip()
    const { isPinnedMsg, pinHandler, removeHandler } = useIcons(data, pinnedItem, pinItem, removeItem, cartRef)
    const { mouseMoveHandler, animateIn, animateOut } = use3D(cartRef)

    return (
        <div
            className={classes.Wrapper}
            onMouseMove={mouseMoveHandler}
            onMouseEnter={animateIn}
            onMouseLeave={animateOut}>
            {isPinnedMsg && <span>Only one pinned item allowed</span>}
            <div className={classes.Container} ref={cartRef}>
                <div className={classCart} onClick={toggleFlip}>
                    <div className={classes.Front}>
                        <div className={classes.FrontBgImg}>
                            <img src={bg_img} alt=""/>
                        </div>
                        <div className={classes.FrontContent}>
                            <div className={classes.Header}>
                                <h3>{data.name}</h3>
                                <div className={classes.Icons}>
                                    {!data.pinned
                                    ? <span onClick={pinHandler}><VscPin /></span>
                                    : <span onClick={pinHandler}><VscPinned /></span>}
                                    <span onClick={removeHandler}><VscTrash /></span>
                                </div>
                            </div>
                            <div  className={classes.Img}>
                                <img src={data.img} alt=""/>
                            </div>
                            <div className={classes.Price}>
                                <span>{`$ ${data.price}`}</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes.Back}>
                        <div className={classes.BackHeader}>
                            <h4>Model overview:</h4>
                        </div>
                        <div className={classes.BackDesc}>
                            <Scrollbars
                                autoHeight
                                autoHeightMax={270}>
                                <p>{data.desc}</p>
                            </Scrollbars>
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
        pinItem: (item) => dispatch(pinAction(item)),
        removeItem: (item) => dispatch(removeAction(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);