import React, { Component } from 'react';
import './styles.scss';


class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
        };
        this.decrement = this.decrement.bind(this);
    }

    decrement() {
        this.setState({
            counter: this.state.counter - 1,
        })
    }

    increment = () => {
        this.setState({
            counter: this.state.counter + 1,
        })
    }

    reset() {
        this.setState({
            counter: 0,
        })
    }

    render() {
        return (

            <div className="counter">
                <button
                    className="counter__button"
                    onClick={this.decrement}
                >
                    -
                    </button>

                <span 
                    className="counter__value"
                    onClick={() => this.reset()}
                >
                    {this.state.counter}
                </span>

                <button
                    className="counter__button"
                    onClick={this.increment}
                >
                    +
                    </button>
            </div>
        )
    }
}

export default Counter;