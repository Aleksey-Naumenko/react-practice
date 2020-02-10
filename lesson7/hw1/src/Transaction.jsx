import React from 'react';
import './index.scss';
import moment from 'moment';


const Transaction = ({ transaction }) => {
    
    const amount = new Intl.NumberFormat('en-GB').format(transaction.amount);
    const time = moment(transaction.time).format('HH:mm');
    const date = moment(transaction.date).format('DD MMM');

    return (
        <li className="transaction">
            <span className="transaction__date">{date}</span>
            <span className="transaction__time">{time}</span>
            <span className="transaction__assets">{`${transaction.from} → ${transaction.to}`}</span>
            <span className="transaction__rate">{transaction.rate}</span>
            <span className="transaction__amount">{amount}</span>
        </li>
    );
};

export default Transaction;
