import React, { Component } from 'react';
import TaskInput from './TaskInput';
import Task from './Task';
import { connect } from 'react-redux';
import { sortedTasksSelector } from '../tasks.selectors';
import * as tasksActions from '../tasks.actions';
import PropTypes from 'prop-types';

class TasksList extends Component {

    componentDidMount() {
        this.props.getTasks();
    };

    render() {
        return (
            <div className="todo-list">
                <TaskInput
                    onCreateTask={this.props.createTask} />
                <ul className="list">
                    {this.props.tasks.map(task =>
                        <Task
                            {...task}
                            key={task.id}
                            onDeleteTask={this.props.deleteTask}
                            onChangeStatus={this.props.updateTask} />
                    )}
                </ul>
            </div>
        )
    }
};

TasksList.propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape()),
    getTasks: PropTypes.func,
    createTask: PropTypes.func,
    deleteTask: PropTypes.func,
    updateTask: PropTypes.func,
};

const mapState = state => {
    return {
        tasks: sortedTasksSelector(state),
    };
};

const mapDispatch = {
    getTasks: tasksActions.getTasksList,
    createTask: tasksActions.createTask,
    deleteTask: tasksActions.deleteTask,
    updateTask: tasksActions.updateTask,
};

export default connect(mapState, mapDispatch)(TasksList);