import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import UsersList from './UsersList';

const rootElem = document.querySelector('#root');

const users = [
    {
        name: 'Bob',
        age: 21,
        id: 'id1',
    },{
        name: 'Tom',
        age: 17,
        id: 'id2',

    },{
        name: 'John',
        age: 31,
        id: 'id3',

    },{
        name: 'Sam',
        age: 45,
        id: 'id4',

    },
]

ReactDOM.render(<UsersList users={users}/>, rootElem);