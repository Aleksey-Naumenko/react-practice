import React, { Component } from 'react';


class Life extends Component {
    constructor(props) {
        super(props);

        console.log('constructor: good place to create state');
    }

    componentDidMount() {
        console.log('componentDidMount: API calls, subscriptions');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shoudlComponentUpdate(nextProps, nextState): decide to render or not to render');
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDidUpdate(prevProps, prevState): some updates based on new props');
    }

    componentWillUnmount() {
        console.log('componentWillUnmount(): cleanup before DOM related to component will be removed');
    }

    render() {
        console.log('return React element to build DOM');
        return (
            <div>Text Here</div>
        )
    }
}

export default Life;