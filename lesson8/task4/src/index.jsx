import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';

import User from './User';


const rootElem = document.querySelector('#root');

ReactDOM.render(<User userId="facebook"/>, rootElem);