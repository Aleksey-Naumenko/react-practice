import React from 'react';
import './avatar.scss';

const UserAvatar = props => {
    return (
        <img
          className="avatar"
          src={props.avatarUrl}
          alt="ava"
        />
    );
};

export default UserAvatar;