import React, { Component } from 'react';
import './index.scss';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';


class Auth extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false,
            spinnerRolling: true,
        }
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true,
        })
        setTimeout(() => {
            this.setState({
                spinnerRolling: false,
            })
        }, 2000);
    }

    onLogout = () => {
        this.setState({
            isLoggedIn: false,
            spinnerRolling: true,
        })
    }

    render() {
        return (
            <>
                {!this.state.isLoggedIn ?
                    <Login onLogin={() => this.onLogin} /> :
                    !this.state.spinnerRolling ?
                        <Logout onLogout={() => this.onLogout} /> :
                        <Spinner size={30} />
                }
            </>
        )
    }
}

export default Auth;