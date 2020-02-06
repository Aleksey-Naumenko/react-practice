import React from "react";
import ReactDOM from 'react-dom';
import "./comment.scss";
import "./styles.css";
import Comment from "./Comment";


const rootElem = document.querySelector('#root');
const authorInfo = {
    name: 'Tom',
    avatarUrl: 'https://someCoolAvarat.org'
};


ReactDOM.render(
    <Comment
        author={authorInfo}
        text="Hello there!"
        date={new Date("2020-02-06T22:38:20.566Z")}
    />, rootElem);