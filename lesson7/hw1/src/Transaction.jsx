import React from 'react';
import './index.scss';
import moment from 'moment';


const Transaction = (props) => {
    
    const amount = new Intl.NumberFormat('en-GB').format(props.amount);
    const time = moment(props.time).format('HH:mm');
    const date = moment(props.date).format('DD MMM');

    return (
        <li className="transaction">
            <span className="transaction__date">{date}</span>
            <span className="transaction__time">{time}</span>
            <span className="transaction__assets">{`${props.from} → ${props.to}`}</span>
            <span className="transaction__rate">{props.rate}</span>
            <span className="transaction__amount">{amount}</span>
        </li>
    );
};

export default Transaction;
