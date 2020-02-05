import './index.css';
import ReactDOM from 'react-dom';
import React from 'react';


const rootElem = document.querySelector('#root');
const todoList = (
    <h2 className="title">Todo List</h2>
);

ReactDOM.render(todoList, rootElem);