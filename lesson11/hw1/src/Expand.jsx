import React, { Component } from 'react';
import { render } from 'react-dom';


class Expand extends Component {
    state = {
        isShown: false,
    };

    textToggler = () => {
        this.setState({
            isShown: !this.state.isShown,
        })
    }

    render() {
        return (
            <div className="expand border">
                <div className="expand__header">
                    <span className="expand__title">{this.props.title}</span>
                    <button className="expand__toggle-btn" onClick={this.textToggler}>
                        {this.state.isShown ?
                            <i className="fas fa-chevron-up"></i> :
                            <i className="fas fa-chevron-down"></i>}
                    </button>
                </div>
                <div className="expand__content">
                    {this.state.isShown ?
                        this.props.children :
                        null}
                </div>
            </div>
        );
    }
}

export default Expand;