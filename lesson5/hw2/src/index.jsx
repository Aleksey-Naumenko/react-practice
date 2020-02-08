import React from 'react';
import ReactDOM from 'react-dom';
import './styles.scss';
import ColorPicker from './ColorPIcker';


const rootElem = document.querySelector('#root');

ReactDOM.render(<ColorPicker />, rootElem);