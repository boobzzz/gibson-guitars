import classes from './Button.module.css';

export const Button = ({ title }) => {
    return (
        <div className={classes.Button}>
            <button type="submit">
                {title}
            </button>
        </div>
    )
}