import React, { Component } from 'react';
import { ThemeContext } from './themes';

class ThemedButton extends Component {

    render() {
        console.log(this.context);
        const { fontColor, background } = this.context;
        return (
            <button {...this.props}
                className="btn"
                style={{ color: fontColor, backgroundColor: background }}
            ></button>
            );
    };
};

ThemedButton.contextType = ThemeContext;

export default ThemedButton;