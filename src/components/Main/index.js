import { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { getAction } from '../../store/actions';
import { productsSelector, getFilter, getIsLoading, getError } from '../../store/selectors';
import { useFirestore } from './useFirestore';
import { Button } from '../UI/Button/RegularBtn/Button';
import { Overlay } from '../UI/Overlay/Overlay';
import { Loader } from '../UI/Loader/Loader';
import { NotFound } from '../UI/NotFound/NotFound';
import ProductForm from '../Product/Form';
import ProductItem from '../Product/Item';
import classes from './Main.module.css';

const Main = (props) => {
    const { isLoading, error, products, filter, getProducts } = props
    const [ isOpen, setIsOpen ] = useState(false)
    const { data, fetchError } = useFirestore('products')
    
    useEffect(() => {
        getProducts(data)
    }, [getProducts, data])

    const toggleOverlay = () => setIsOpen(!isOpen)

    const filtered = products.filter(item =>
        item.name.match(new RegExp(`^${filter}`, 'i'))
    )

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

    if (error || fetchError) return <NotFound />

    return (
        <main>
            <div className={classes.Wrapper}>
                <section>
                    <div className={classes.ListContainer}>
                        <ul className={classes.List}>
                            {filtered.map(product =>
                                <li key={product.id}>
                                    <ProductItem data={product} />
                                </li>
                            )}
                        </ul>
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
        isLoading: getIsLoading(state),
        error: getError(state),
        products: productsSelector(state),
        filter: getFilter(state)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (data) => dispatch(getAction(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);