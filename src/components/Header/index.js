import logo from '../../assets/images/logo.png';
import classes from './Header.module.css';

export const Header = () => {
    return (
        <header>
            <div className={classes.Wrapper}>
                <a href="#/" className={classes.Logo}>
                    <img src={logo} alt=""/>
                </a>
            </div>
        </header>
    )
}