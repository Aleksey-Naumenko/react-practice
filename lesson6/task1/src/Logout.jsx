import React, { Component } from 'react';


class Logout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
                className="logout btn"
                onClick={this.props.onLogout}
            >
                Logout
            </button>
            )
        }
}

export default Logout;