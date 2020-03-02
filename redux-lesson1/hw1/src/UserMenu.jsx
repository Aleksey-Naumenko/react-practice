import React, { Component } from 'react';
import { UserContext } from './themes';

class UserMenu extends Component {
    render() {
        const { name, avatar_url } = this.context;
        return (
            <div className="menu">
                <span className="menu__greeting">{`Hello, ${name}`}</span>
                <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
            </div>
        );
    }
}

UserMenu.contextType = UserContext;

export default UserMenu;