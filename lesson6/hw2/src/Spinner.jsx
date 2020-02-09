import React from 'react';
import './index.scss';

const Spinner = props => {
    return (
        <span
            className="spinner"
            style={{width: props.size, height: props.size}}
        ></span>
    )
};


export default Spinner;
