import classes from './Button.module.css';
import { RiCloseCircleLine } from "react-icons/ri";

export const Button = ({ clicked }) => {
    return (
        <button
            className={classes.Button}
            onClick={clicked}>
            <RiCloseCircleLine />
        </button>
    ) 
}