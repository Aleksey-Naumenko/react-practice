import React from "react";
import UserInfo from "./UserInfo";
import moment from "moment";
import './comment.scss';


const formatDate = date => moment(date).format("DD MMM YYYY");

const Comment = props => {
    return (
        <div className="comment">
            <UserInfo author={props.author}/>
            <div className="comment__text">{props.text}</div>
            <div className="comment__date">{formatDate(props.date)}</div>
        </div>
    );
}

export default Comment;