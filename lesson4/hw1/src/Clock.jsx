import React, { Component } from 'react';
import moment, { utc } from 'moment';
import './clock.scss';

const getLocaleTime = offset => {   
    const setHours = new Date().setHours(new Date().getHours() + offset);
    const formatTime = moment(setHours).format('LTS');
    return formatTime;
};

class Clock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            localeTime: '',
        }

        setInterval(() => {
            this.setState({
                localeTime: getLocaleTime(this.props.offset),
            });
        }, 1000);
    }
    render() {
        return (
            <div className="clock">
                <div className="clock__location">{this.props.location}</div>
                <div className="clock__time">{this.state.localeTime}</div>
            </div>
        );
    }
}

export default Clock;