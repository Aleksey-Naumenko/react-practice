import React, { Component } from 'react';


import moment, { utc } from 'moment';

const getLocaleTime = offset => {   
    const setHours = new Date().setHours(new Date().getHours() + offset);
    const formatTime = moment(setHours).format('LTS');
    return formatTime;
};


class Clock extends Component {
    constructor(props) {
        super(props);
        this.state ={
            date: getLocaleTime(props.offset),
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(() => {
            this.setState({
                date: getLocaleTime(this.props.offset),
            })
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    render() {
        return (
            <div className="clock">
                <div className="clock__location">
                    {this.props.location}
                </div>
                <div className="clock__time">
                    {this.state.date}
                </div>
            </div>
        )
    }
}

export default Clock;