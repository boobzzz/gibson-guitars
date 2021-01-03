import gibsonLogo from '../../assets/images/gibson-logo.svg';
import epiphoneLogo from '../../assets/images/epiphone-logo.svg';
import kramerLogo from '../../assets/images/kramer-logo.svg';
import steinbergerLogo from '../../assets/images/steinberger-logo.svg';

import classes from './Footer.module.css';

const brands = [gibsonLogo, epiphoneLogo, kramerLogo, steinbergerLogo]

const Footer = () => {
    return (
        <footer>
            <div className={classes.Wrapper}>
                <h3>Visit The Gibson Brands Family</h3>
                <div className={classes.Brands}>
                    {brands.map(brand =>
                        <a href="#/" key={brand}>
                            <img src={brand} alt=""/>
                        </a>
                    )}
                </div>
            </div>
        </footer>
    )
}

export default Footer;