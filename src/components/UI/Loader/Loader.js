import ScaleLoader from 'react-spinners/ScaleLoader';

import classes from './Loader.module.css';

export const Loader = (props) => {
    const { height, width, radius, margin, color, loading } = props

    return (
        <div className={classes.Loader}>
            <ScaleLoader
                height={height}
                width={width}
                radius={radius}
                margin={margin}
                color={color}
                loading={loading} />
        </div>
    )
}