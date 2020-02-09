import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Mailbox from './Mailbox';

const rootElem = document.querySelector('#root');

ReactDOM.render(<Mailbox unreadMessages={['1']}/>, rootElem);
