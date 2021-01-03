import classes from './Button.module.css';

export const Button = ({ title, disabled }) => {
    return (
        <div className={classes.Button}>
            <button type="submit" disabled={disabled}>
                {title}
            </button>
        </div>
    )
}