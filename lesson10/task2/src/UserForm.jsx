import React from 'react';

const UserForm = ({ userData, onChange }) => {
    const eventHandler = e => {
        onChange(e);
    }
    return (
        <form className="user-form">
            <input
                type="text" 
                name="firstName" 
                className="user-form__input" 
                value={userData.firstName}
                onChange={eventHandler}
            />
            <input 
                type="text" 
                name="lastName" 
                className="user-form__input" 
                value={userData.lastName}
                onChange={eventHandler}
            />
        </form>
    );
};

export default UserForm;