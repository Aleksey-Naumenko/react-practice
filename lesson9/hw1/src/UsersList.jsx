import React from 'react';
import User from './User';
import Pagination from './Pagination';


const UsersList = props => {
    return (
        <>
            <Pagination />

            <ul className="users">
                <User name={name} age={age} />
            </ul>
        </>
    );
};

export default UsersList;