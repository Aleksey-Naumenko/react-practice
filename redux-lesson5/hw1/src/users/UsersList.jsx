import React from 'react';
import User from './User';
import Filter from '../Filter';
import { connect } from 'react-redux';
import { setFilterText } from './users.actions';
import { filterTextSelector, filteredUsersSelector } from './users.selectors';

const UsersList = ({ users, filterText, onFilterUsers }) => {
    const onChangeHandler = e => {
        onFilterUsers(e.target.value);
    };

    const newUsers = users.filter(user => user.name
        .toLowerCase().includes(filterText.toLowerCase()));

    return (
        <div>
            <Filter filterText={filterText} count={newUsers.length} onChange={onChangeHandler} />
            <ul className="users">
                {newUsers.map(user => <User key={user.id} name={user.name} age={user.age} />)}
            </ul>
        </div>
    );
};

const mapState = state => {
    return {
        users: filteredUsersSelector(state),
        filterText: filterTextSelector(state),
    };
};

const mapDispatch = {
    onFilterUsers: setFilterText,
};

export default connect(mapState, mapDispatch)(UsersList);