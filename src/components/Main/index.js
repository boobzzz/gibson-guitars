import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from '../../store/middleware';
import { productsSelector, getIsLoading, getError } from '../../store/selectors';
import ProductForm from '../Product/Form/index';
import ProductItem from '../Product/Item/index';
import { Button } from '../UI/Button/RegularBtn/Button';
import { Overlay } from '../UI/Overlay/Overlay';
import { Loader } from '../UI/Loader/Loader';
import { NotFound } from '../UI/NotFound/NotFound';

import classes from './Main.module.css';

const Main = (props) => {
    const { products, isLoading, error, getProducts } = props
    const [ isOpen, setIsOpen ] = useState(false)

    useEffect(() => {
        getProducts('/products.json')
    }, [getProducts])

    const toggleOverlay = () => setIsOpen(!isOpen)

    if (isLoading) {
        return (
            <Loader
                height={70}
                width={8}
                radius={4}
                margin={4}
                color="#1ABC9C"
                loading={isLoading} />
        )
    }

    if (error) return <NotFound />

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
                        <Button title="add item" clicked={toggleOverlay} />
                    </div>
                    <Overlay
                        isOpen={isOpen}
                        close={toggleOverlay}
                        component={<ProductForm />} />
                </section>
            </div>
        </main>
    )
}

const mapStateToProps = (state) => {
    return {
        products: productsSelector(state),
        isLoading: getIsLoading(state),
        error: getError(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (url) => dispatch(fetchProducts(url)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);