import React from 'react';
import {connect} from 'react-redux';
import * as counterActions from './counter.actions';

const Counter = ({ counter, increment, decrement }) => {

    return (
        <div className="counter">
            <button className="counter__button" onClick={() => decrement()}>
                -
                </button>
            <span className="counter__value">
                {counter}
            </span>
            <button className="counter__button" onClick={() => increment()}>
                +
                </button>
        </div>
    );
};

const mapState = state => {
    return {
        counter: state.counter,
    }
};

const mapDispatch = {
    increment: counterActions.increment,
    decrement: counterActions.decrement,
}

export default connect(mapState, mapDispatch)(Counter);