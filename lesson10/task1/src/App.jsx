import React, { Component } from 'react';
import UserMenu from './UserMenu';
import UserProfile from './UserProfile';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: null,
        };
    };

    componentDidMount() {
        this.fetchUser(this.props.userId);
    }

    fetchUser = userId => {
        const url = `https://api.github.com/users/${userId}`;
        fetch(url)
            .then(res => res.json())
            .then(userData => {
                this.setState({
                    userData,
                });
            })
            .catch((err) => console.log(new Error(err, 'Fetching Error!')));
    };

    render() {
        return (
            <div className="page">
                <header className="header">
                    <UserMenu userData={this.state.userData} />
                </header>
                <UserProfile userData={this.state.userData} />
            </div>
        )
    }
}

export default App;