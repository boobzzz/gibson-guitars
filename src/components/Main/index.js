import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { productsAction } from '../../store/actions';
import { productsSelector } from '../../store/selectors';
import ProductForm from '../Product/Form/index';
import ProductItem from '../Product/Item/index';
import { Button } from '../UI/Button/RegularBtn/Button';
import { Overlay } from '../UI/Overlay/Overlay';

import classes from './Main.module.css';

const Main = (props) => {
    const { products, getProducts } = props
    const [ isOpen, setIsOpen ] = useState(false)
    
    const closeOverlay = () => setIsOpen(false)

    useEffect(() => {
        getProducts('/products.json')
    }, [getProducts])

    const addItem = () => {
        setIsOpen(true)
    }

    return (
        <main>
            <div className={classes.Wrapper}>
                <section>
                    <div className={classes.ListContainer}>
                        <div className={classes.List}>
                            {products.map(product =>
                                <ProductItem key={product._id} data={product} />
                            )}
                        </div>
                        <Button title="add item" clicked={addItem} />
                    </div>
                    <Overlay
                        isOpen={isOpen}
                        close={closeOverlay}
                        component={<ProductForm />} />
                </section>
            </div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        products: productsSelector(state),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (url) => dispatch(productsAction(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);