import React, { Component } from 'react';
import { userInfo, UserContext } from './themes';
import Header from './Header';

class App extends Component {
    state = {
        userData: userInfo,
    };

    render() {
        return (
            <div className="page">
                <UserContext.Provider value={this.state.userData}>
                    <Header />
                </UserContext.Provider>
            </div>
        );
    };
};

export default App;