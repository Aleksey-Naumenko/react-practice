import React from 'react';
import User from './User';
import Pagination from './Pagination';
import { connect } from 'react-redux';
import * as userActions from './user.actions.js';

const UsersList = ({ users, currentPage, goNext, goPrev }) => {

    const nextPage = currentPage * 3;
    const usersToRender = users.slice(currentPage * 3, nextPage + 3);

    return (
        <>
            <Pagination
                goPrev={goPrev}
                goNext={goNext}
                currentPage={currentPage}
                totalItems={users.length}
                itemsPerPage={3} />
            <ul className="users">
                {usersToRender.map(user => <User key={user.id} name={user.name} age={user.age} />)}
            </ul>
        </>
    );
};

const mapState = state => {
    return {
        users: state.users.usersList,
        currentPage: state.users.currentPage,
    }
};

const mapDispatch = {
    goNext: userActions.goNext,
    goPrev: userActions.goPrev,
}

const connector = connect(mapState, mapDispatch);

export default connector(UsersList);