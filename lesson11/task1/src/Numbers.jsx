import React, { Component } from 'react';


class Numbers extends Component {
    shouldComponentUpdate(nextProps) {
        if (this.props.number === nextProps.number && this.props.title === nextProps.title) {
            return false;
        }
        return true;
    }

    render() {
        return (
            <div className="number">
                <span className="number__title">{this.props.title}</span>
                <span className="number__value">{this.props.number}</span>
            </div>
        );
    }
}

export default Numbers;