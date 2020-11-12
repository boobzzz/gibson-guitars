import classes from './NotFound.module.css';

export const NotFound = () => {
    return (
        <div className={classes.NotFound}>
            <h1>404:</h1>
            <p>Oooooops, something went wrong, please try again.</p>
        </div>
    )
}