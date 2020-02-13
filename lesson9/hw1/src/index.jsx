import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import UsersList from './UsersList';


const rootElem = document.querySelector('#root');

const users = [
    {
        name: 'Tom',
        age: 13,
    },
    {
        name: 'Bob',
        age: 66,
    },
    {
        name: 'Dan',
        age: 32,
    },
    {
        name: 'Bill',
        age: 46,
    },
    {
        name: 'John',
        age: 21,
    },
    {
        name: 'Ron',
        age: 42,
    },
    {
        name: 'Gel',
        age: 41,
    },
    {
        name: 'Chack',
        age: 34,
    },
    {
        name: 'Fill',
        age: 63,
    },
    {
        name: 'Dag',
        age: 23,
    },

]

ReactDOM.render(<UsersList users={users}/>, rootElem);