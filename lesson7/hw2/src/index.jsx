import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import UsersList from './UsersList';

const rootElem = document.querySelector('#root');

const users = [
    {
        name: 'Tom',
        age: 21,
        id: 'id1'
    },
    {
        name: 'Dan',
        age: 14,
        id: 'id2'
    },
    {
        name: 'Bob',
        age: 34,
        id: 'id3'
    },
    {
        name: 'Huan',
        age: 44,
        id: 'id4'
    },
    {
        name: 'David',
        age: 76,
        id: 'id5'
    },
    {
        name: 'John',
        age: 38,
        id: 'id6'
    },
    {
        name: 'Enrique',
        age: 8,
        id: 'id7'
    },
    {
        name: 'Gonsales',
        age: 82,
        id: 'id8'
    },
    {
        name: 'Mario',
        age: 32,
        id: 'id9'

    },
    {
        name: 'Ernesto',
        age: 61,
        id: 'id10'
    },
    {
        name: 'Franchesco',
        age: 23,
        id: 'id11'
    },
    {
        name: 'Rodriges',
        age: 19,
        id: 'id12'
    },
    {
        name: 'Sanchos',
        age: 30,
        id: 'id13'
    },
]

ReactDOM.render(<UsersList users={users}/>, rootElem);

