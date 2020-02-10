import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import NumbersList from './NumbersList';

const rootElem = document.querySelector('#root');

const numbers = [1, 2, 3, 4, 5, 6];

ReactDOM.render(<NumbersList numbList={numbers}/>, rootElem);