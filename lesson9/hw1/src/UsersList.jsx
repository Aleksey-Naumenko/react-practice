import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';


class UsersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            usersToSearch: props.users,
        };

    }

    searchHandler = e => {
        const { name, value } = e.target;

        const usersToSearchArr = this.props.users
            .filter(user => user.name.toLowerCase().includes(value.toLowerCase()));

        this.setState({
            [name]: value,
            usersToSearch: usersToSearchArr,
        });
    }

    render() {
        return (
            <>
                <Filter
                    filterText={this.state.search}
                    count={this.state.usersToSearch.length}
                    onChange={this.searchHandler}

                />
                <ul className="users">
                    {this.state.usersToSearch.map(({ name, age, id }) => <User key={id} name={name} age={age} />)}
                </ul>
            </>
        );
    }
};

export default UsersList;