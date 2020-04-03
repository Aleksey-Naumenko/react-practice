import React, { Component } from 'react';
import { getUserData } from './usersGateway';

class User extends Component {
    state = {
        userData: null,
    };

    componentDidMount() {
        getUserData().then(userData =>
            this.setState({
                userData,
            }),
        );
    }

    render() {
        const { userData } = this.state;
        if (!userData) {
            return null;
        }
        const { name, location, avatar_url } = userData;
        return (
            <div className="user">
                <img
                    alt="User Avatar"
                    src={avatar_url}
                    className="user__avatar"
                />
                <div className="user__info">
                    <span className="user__name">{name}</span>
                    <span className="user__location">{location}</span>
                </div>
            </div>
        );
    }
}

export default User;