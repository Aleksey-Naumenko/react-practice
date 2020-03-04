import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as userActions from './users.actions';

class Users extends Component {
    onUserCreate = () => {
        const id = Math.floor(Math.random() * 1000000);
        const newUser = {
            id,
            name: `User # ${id}`,
        };
        this.props.createUser(newUser);
    };

    render() {
        const { users, deleteUser } = this.props;
        console.log(this.props);
        return (
            <div className="users">
                <button 
                    className="users__create-btn"
                    onClick={this.onUserCreate}
                >Create user</button>
                <ul className="users__list">
                    {users.map(user => (
                        <li key={user.id} className="users__list-item">
                            <span>User # 232286</span>
                            <button
                                className="users__delete-btn"
                                onClick={() => deleteUser(user.id)}
                            >+</button>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

const mapState = state => {
    return {
        users: state.users.usersList,
    }
};

const mapDispatch = {
    createUser: userActions.addUser,
    deleteUser: userActions.deleteUser,
}

const connector = connect(mapState, mapDispatch);

const ConnectedUsers = connector(Users);

export default ConnectedUsers;