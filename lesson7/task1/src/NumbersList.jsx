import React, { Component } from 'react';
import './index.scss';


const NumbersList = ({numbList}) => {
    return (
        <ul>
            {numbList.map((num, index) => <li key={index}>{num}</li>)}
        </ul>
    )
};

export default NumbersList;
