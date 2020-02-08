import React, { Component } from 'react';


class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button
                className="login btn"
                onClick={this.props.onLogin}
            >
                Login
            </button>
            )
        }
}

export default Login;