import React, { Component } from 'react';
import './styles.scss'


class GoodButton extends Component {
    clickHandler() {
        alert('Good job!');
    }

    render() {
        return (
            <button
                className="fancy-button"
                onClick={this.clickHandler}
            >
                Click me!
            </button>
        )
    }
}

export default GoodButton;