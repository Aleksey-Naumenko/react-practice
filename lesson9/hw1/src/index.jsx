import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import UsersList from './UsersList';


const rootElem = document.querySelector('#root');

const users = [
    {
        name: 'Tom',
        age: 13,
        id: 'id1',
    },
    {
        name: 'Bob',
        age: 66,
        id: 'id2',
    },
    {
        name: 'Dan',
        age: 32,
        id: 'id10',
    },
    {
        name: 'Bill',
        age: 46,
        id: 'id3',
    },
    {
        name: 'John',
        age: 21,
        id: 'id4',
    },
    {
        name: 'Ron',
        age: 42,
        id: 'id5',
    },
    {
        name: 'Gel',
        age: 41,
        id: 'id6',
    },
    {
        name: 'Chack',
        age: 34,
        id: 'id7',
    },
    {
        name: 'Fill',
        age: 63,
        id: 'id8',
    },
    {
        name: 'Dag',
        age: 23,
        id: 'id9',
    },

]

ReactDOM.render(<UsersList users={users}/>, rootElem);