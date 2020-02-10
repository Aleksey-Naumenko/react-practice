import React, { Component } from 'react';
import './index.scss';


const NumbersList = ({numbList}) => {
    return (
        <ul>
            {numbList.map(num => <li>{num}</li>)}
        </ul>
    )
};

export default NumbersList;
