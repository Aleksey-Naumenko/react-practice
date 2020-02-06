import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import './search.scss';

import Search from './Search.jsx';

const rootElem = document.querySelector('#root');

ReactDOM.render(<Search name="Tom" />, rootElem);
