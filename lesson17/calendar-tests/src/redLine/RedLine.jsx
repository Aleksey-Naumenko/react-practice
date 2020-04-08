import React, { Component } from 'react';
import './redLine.scss';

class RedLine extends Component {
    state = {
        currentMinute: new Date().getMinutes() - 4
    };

    componentDidMount() {
        this.indervalId = setInterval(() => {
            const marginTop = new Date().getMinutes() - 4;

            this.setState({
                currentMinute: marginTop
            })
        }, 60000);
    }

    componentWillUnmount() {
        clearInterval(this.indervalId);
    }

    render() {        
        return (
            <div className="redline" style={{ marginTop: `${this.state.currentMinute}px` }}>
                <div className="dot"></div>
                <div className="line"></div>
            </div>
        );
    }
};

export default RedLine;