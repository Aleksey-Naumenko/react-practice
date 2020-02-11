import React, { Component } from 'react';
import './index.scss';


const NumbersList = ({numbers}) => {
    return (
        <ul>
            {numbers.map((num, index) => <li key={index}>{num}</li>)}
        </ul>
    )
};

export default NumbersList;
