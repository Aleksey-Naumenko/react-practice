import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const rootElement = document.querySelector('#root');

const container = (
    <div className="greeting">
        <h1 className="greeting__title">Hello, world!</h1>
        <p className="greeting__text">I'm learning React</p>
    </div>
);

ReactDOM.render(container, rootElement);
