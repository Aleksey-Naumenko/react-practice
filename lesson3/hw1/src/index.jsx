import ReactDOM from 'react-dom';
import React from 'react';
import Greeting from './Greeting';

const rootElement = document.querySelector('#greeting');

ReactDOM.render(<Greeting
    name="John"
    lastName="Doe"
    birthDate={"1992-11-06T22:00:00.000Z"}
/>, rootElement);