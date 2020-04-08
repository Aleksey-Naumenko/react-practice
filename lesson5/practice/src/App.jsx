import React, { Component } from 'react';
import './styles.scss';

class ColorPicker extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pickerTile: 'Hower the button!'
        }
    }

    onShowColor = color => {
        this.setState({
            pickerTile: color,
        });
    }

    onSetDefault = () => {
        this.setState({
            pickerTile: 'Hower the button!'
        })
    }

    render() {
        return (
            <>
                <div className="picker__title">
                    {this.state.pickerTile}
                </div>
                <div>
                    <button
                        className="picker__button picker__button_coral"
                        onMouseOver={() => this.onShowColor('Coral')}
                        onMouseOut={this.onSetDefault}
                    ></button>
                    <button
                        className="picker__button picker__button_aqua"
                        onMouseOver={() => this.onShowColor('Aqua')}
                        onMouseOut={this.onSetDefault}
                    ></button>
                    <button
                        className="picker__button picker__button_bisque"
                        onMouseOver={() => this.onShowColor('Bisque')}
                        onMouseOut={this.onSetDefault}
                    ></button>
                </div>
            </>
        )
    }
}

export default ColorPicker;
