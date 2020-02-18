import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const Task = ({ text, done, id, onDeleteTask, onChangeStatus }) => {

    return (
        <li className={classNames('list-item', {'list-item_done' : done})}>
            <input 
                className="list-item__checkbox"
                defaultChecked={done}
                type="checkbox"
                onChange={() => onChangeStatus(id)}
            />
            <span className="list-item__text">{text}</span>
            <button
                className="list-item__delete-btn"
                onClick={() => onDeleteTask(id)}
            ></button>
        </li>
    );
};

export default Task;

Task.propTypes = {
    text: PropTypes.string,
    done: PropTypes.bool,
    id: PropTypes.string,
    onDeleteTask: PropTypes.func,
    onChangeStatus: PropTypes.func

}