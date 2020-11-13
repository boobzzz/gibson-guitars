import { connect } from 'react-redux';
import { searchAction } from '../../store/actions';
import logo from '../../assets/images/logo.png';
import { RiSearchLine } from "react-icons/ri";
import HamburgerMenu from 'react-hamburger-menu';

import classes from './Header.module.css';
import { useState } from 'react';

const Header = (props) => {
    const { filterProducts } = props
    const [ isOpen, setIsOpen ] = useState(false)
    const [ value, setValue ] = useState('')
    
    const toggleMenu = () => setIsOpen(!isOpen)
    
    const changeHandler = (e) => {
        let value = e.target.value
        
        setValue(value)
        filterProducts(value)
    }

    return (
        <header>
            <div className={classes.Wrapper}>
                <a href="#/" className={classes.Logo}>
                    <img src={logo} alt=""/>
                </a>
                <div className={classes.Navigation}>
                    <div className={classes.Search}>
                        <input id="search" type="text" onChange={changeHandler} value={value} placeholder="search guitar"/>
                        <label htmlFor="search"><RiSearchLine /></label>
                    </div>
                    <nav>
                        <HamburgerMenu
                            isOpen={isOpen}
                            menuClicked={toggleMenu}
                            width={36}
                            height={18}
                            strokeWidth={4}
                            color="black"
                            animationDuration={0.4} />
                    </nav>
                </div>
            </div>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        filterProducts: (value) => dispatch(searchAction(value)),
    }
}

export default connect(null, mapDispatchToProps)(Header);