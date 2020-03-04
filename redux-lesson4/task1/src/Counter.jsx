import React from 'react';
import { connect } from 'react-redux';
import * as CounterActions from './counter.actions';

const Counter = ({ counter, increment, decrement, reset }) => {
    console.log(counter);
    return (
        <div className="counter">
            <button
                className="counter__button"
                onClick={() => decrement()}>
                -
            </button>
            <span
                className="counter__value"
                onClick={() => reset()}>
                {counter}
            </span>
            <button
                className="counter__button"
                onClick={() => increment()}>
                +
            </button>
        </div>
    );
};

const mapState = state => {
    return {
        counter: state,
    };
};

const mapDispatch = {
    increment: CounterActions.increment,
    decrement: CounterActions.decrement,
    reset: CounterActions.reset,
};

const connector = connect(mapState, mapDispatch);

export default connector(Counter);