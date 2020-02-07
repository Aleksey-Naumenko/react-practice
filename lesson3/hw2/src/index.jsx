import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import Greeting from './Profile';


const rootElem = document.querySelector('#root');

const userData = {
    firstName: 'John',
    lastName: 'Doe',
    birthDate: '1991-01-17T11:11:11.819Z',
    birthPlace: 'London'
}

ReactDOM.render(<Greeting userData={userData}/>, rootElem);