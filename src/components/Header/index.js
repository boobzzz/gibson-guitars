import logo from '../../assets/images/header-logo.svg';
import classes from './Header.module.css';

export const Header = () => {
    return (
        <header>
            <div className={classes.Logo}>
                <img src={logo} alt=""/>
            </div>
        </header>
    )
}