import React, { Component } from 'react';
import './styles.scss';

const RED = '#f00';
const GREEN = '#0f0';
const BLUE = '#00f';

class Colors extends Component {
    setBodyColor = color => {
        document.body.style.backgroundColor = color;
    }


    render() {
        return (
            <div className="colors">
                <button
                 className="colors__button"
                 style={{backgroundColor: RED}}
                 onClick={() => this.setBodyColor(RED)}
                  />
                <button
                className="colors__button"
                style={{backgroundColor: GREEN}}
                onClick={() => this.setBodyColor(GREEN)}
                />
                <button
                className="colors__button"
                style={{backgroundColor: BLUE}}
                onClick={() => this.setBodyColor(BLUE)}
                />
            </div>
        )
    }
}

export default Colors;