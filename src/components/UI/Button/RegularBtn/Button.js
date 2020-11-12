import classes from './Button.module.css';

export const Button = ({ title, clicked }) => {
    return (
        <div className={classes.Button}>
            <button onClick={clicked}>
                {title}
            </button>
        </div>
    )
}