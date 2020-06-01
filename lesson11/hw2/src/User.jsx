/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';

const User = ({ data }) => {
    const { name, location, avatar_url } = data;

    return (
        <div className="user">
            <img alt="User Avatar" src={avatar_url} className="user__avatar" />
            <div className="user__info">
                <span className="user__name">{name}</span>
                <span className="user__location">{location}</span>
            </div>
        </div>
    );
};

User.propTypes = {
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
    }).isRequired,
};

export default User;