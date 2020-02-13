import React, { Component } from 'react';
import UserForm from './UserForm';

const App = () => {

    return (
        <UserForm onSubmit={formData => console.log(formData)}/>
    );
};

export default App;