import React, { Component } from 'react';
import './styles.scss';

const LIGHT_AQUA = '#D7FCF9';

class Toggler extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buttonOff: true
        }
    }

    onColorChange = () => {
        this.setState({
            buttonOff: !this.state.buttonOff
        });
        this.state.buttonOff ?
            document.body.style.backgroundColor = LIGHT_AQUA :
            document.body.style.backgroundColor = '#fff';

    }

    render() {
        return (
            <button
                className="toggler"
                onClick={this.onColorChange}
            >
                {this.state.buttonOff ? 'Off' : 'On'}
            </button>
        )
    }
}

export default Toggler;