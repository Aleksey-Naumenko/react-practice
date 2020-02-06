import React from 'react';
import UserAvatar from './userAvatar';
import './author.scss';

const UserInfo = props => {
    return (
        <div className="user-info">
            <UserAvatar avatarUrl={props.author.avatarUrl}/>
            <div className="user-info__name">{props.author.name}</div>
        </div>
    );
};

export default UserInfo;