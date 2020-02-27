import React, { Component } from 'react';

class User extends Component {
    state = {
        userName: '',
        userLocation: '',
        userAvatar: '',
        counter: 0
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('UPDATE happened');
        console.log(prevProps);
        console.log(prevState);

        //this.fetchUserData(); // updates when render
        if (prevProps.match.url !== this.props.match.url) {
            this.fetchUserData(this.props.match.url);
        }
    }

    //   userPath = this.props.match.url

    componentDidMount() {
        this.fetchUserData(this.props.match.url);
    }

    fetchUserData = (userPath) => {
        // console.log(this.props.match.url);
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
                <button onClick={() => this.setState({
                    counter: this.state.counter + 1
                })}>
                    Counter now is on {this.state.counter}
                </button>
            </div>
        );
    }
};

export default User;