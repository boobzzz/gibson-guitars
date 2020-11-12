import { useEffect } from 'react';
import { connect } from 'react-redux';
import { productsAction } from '../../store/actions';
import { productsSelector } from '../../store/selectors';
import ProductItem from '../Product/ProductItem/index';

import classes from './Main.module.css';

const Main = (props) => {
    const { products, getProducts } = props
    console.log(products)
    useEffect(() => {
        getProducts('/products.json')
    }, [getProducts])

    return (
        <main>
            <div className={classes.Wrapper}>
                <section>
                    <div className={classes.List}>
                        {products.map(product =>
                            <ProductItem key={product._id} data={product} />
                        )}
                    </div>
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