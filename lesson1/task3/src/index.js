import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElement = document.querySelector('#root');

const container = (
    <div className="greeting">
        <h1 className="greeting__title">Hello, world!</h1>
        <p className="greeting__text">I'm learning React</p>
    </div>
);

ReactDOM.render(container, rootElement);



// const renderGreeting = elem => {
//     const containerElem = document.createElement('div');
//     containerElem.classList.add('greeting');
    
//     const titleElem = document.createElement('h1');
//     titleElem.classList.add('greeting__title');
//     titleElem.textContent = 'Hello, world!'; 
    
//     const textElem = document.createElement('p');
//     textElem.classList.add('greeting__text');
//     textElem.textContent = 'I\'m learning React';

//     containerElem.append(titleElem, textElem);

//     elem.append(containerElem);
// };

// renderGreeting(rootElement);