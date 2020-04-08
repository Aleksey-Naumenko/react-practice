import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskInput extends Component {
    state = {
        value: '',
    };

    onChange = e => {
        this.setState({
            value: e.target.value,
        });
    }

    onCreateTaskHandler = () => {
        this.props.onCreateTask(this.state.value);
        this.setState({ value: '' });
    }

    render() {
        return (
            <div className="create-task">
                <input 
                    className="create-task__input" 
                    type="text" 
                    value={this.state.value}
                    onChange={this.onChange}
                />
                <button 
                    className="btn create-task-btn"
                    onClick={this.onCreateTaskHandler}
                >Create</button>
            </div>
        );
    };
}

export default TaskInput;

TaskInput.propTypes = {
    onCreateTask: PropTypes.func,
}