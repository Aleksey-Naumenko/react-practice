import React, { Component } from 'react';
import './index.scss';

import Transaction from './Transaction';

class TransactionsList extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ul className="transactions">
                {this.props.transactions.map(transaction => 
                    <Transaction 
                        from={transaction.from}
                        to={transaction.to}
                        amount={transaction.amount}
                        rate={transaction.rate}
                        time={transaction.time}
                        key={transaction.id}/> )
                }
            </ul>
        )
    }
}

export default TransactionsList;
