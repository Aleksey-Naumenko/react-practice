import React, { Component } from 'react';

class User extends Component {
    state = {
        userName: '',
        userLocation: '',
        userAvatar: '',
        counter: 0
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.url !== this.props.match.url) {
            this.fetchUserData(this.props.match.url);
        }
    }

    componentDidMount() {
        this.fetchUserData(this.props.match.url);
    }

    fetchUserData = (userPath) => {
        fetch(`https://api.github.com${userPath}`)
            .then(response => response.json())
            .then(user => this.setState({
                userName: user.name,
                userLocation: user.location,
                userAvatar: user.avatar_url
            }));
    }

    render() {
        const { userName, userLocation, userAvatar } = this.state;
        return (
            <div className="user">
                <img alt="User Avatar" src={userAvatar} className="user__avatar" />
                <div className="user__info">
                    <span className="user__name">{userName}</span>
                    <span className="user__location">{userLocation}</span>
                </div>
            </div>
        );
    }
};

export default User;