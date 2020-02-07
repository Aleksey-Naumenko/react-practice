import React, { Component } from 'react';
import './counter.scss';


class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: this.props.start,
        }

        setInterval(() => {
            this.setState({
                counter: this.state.counter + 1,
            });
        }, this.props.interval)
    }


    render() {
        return (
            <div className="counter">{this.state.counter}</div>
        )
    }
};

export default Counter;