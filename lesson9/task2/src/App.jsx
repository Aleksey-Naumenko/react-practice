import React, { Component } from 'react';
import UserForm from './UserForm';

const App = props => {

    function onSubmit (event) {
        event.preventDefault();
        console.log(this.state);
    }

    return (
        <UserForm onSubmit={onSubmit}/>
    );
};

export default App;
