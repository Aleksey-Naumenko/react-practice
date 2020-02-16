import React, { Component } from 'react';
import ShoppingCart from './ShoppingCart';
import Profile from './Profile';

class App extends Component {
    state = {
        userData : {
            firstName: 'John',
            lastName: 'Doe',
        }
    };

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            userData: {
                ...this.state.userData,
                [name]: value,    
            }
        })
    };


    render() {
        const { userData } = this.state;
        return (
            <div className="page">
                <h1 className="title">{`Hello, ${userData.firstName} ${userData.lastName}`}</h1>
                <main className="content">
                <ShoppingCart userData={userData}/>
                <Profile userData={this.state.userData} onChange={this.handleChange} />
                </main>
            </div>
        )
    };
}

export default App;


