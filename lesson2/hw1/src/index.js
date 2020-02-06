import './index.css';
import './list.css';
import ReactDOM from 'react-dom';
import React from 'react';


const rootElem = document.querySelector('#root');
const todoList = (
    <>
    <h2 className="title">Todo List</h2>
    <main className="todo-list">
        <div className="actions">
            <input className="task-input" type="text"/>
            <button className="btn create-task-btn">Create</button>
        </div>
        <ul className="list"></ul>
    </main>
    </>
);

ReactDOM.render(todoList, rootElem);


