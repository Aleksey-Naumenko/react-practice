import React, { Component } from 'react';
import './index.scss';
import User from './User';

class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            sorting: false,
        }
    }

    toggleSorting = () => {
        const newSorting = this.state.sorting === 'asc' ?
            'desc' : 'asc';
        this.setState({
            sorting: newSorting,
        })
    }

    render() {
        let usersList;
        if (this.state.sorting) {
            usersList = this.props.users
                .slice()
                .sort((a, b) => 
                    this.state.sorting === 'asc'
                        ? a.age - b.age
                        : b.age - a.age
                );
        } else {
            usersList = this.props.users;
        }

        console.log(usersList);
        console.log(this.state.sorting);


        return (
            <>
                <button className="btn" onClick={this.toggleSorting}>{
                    this.state.sorting || '-'
                }</button>
                <ul className="users">
                    {usersList.map(user => 
                        <User key={user.id} {...user} />)}
                </ul>
            </>
        )
    }
}

export default UsersList;