import React, { Component } from 'react';
import TaskInput from './TaskInput';
import Task from './Task';
import { createTask, fetchTasksList, updateTask, deleteTask } from './TasksListGateways';

class TasksList extends Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        this.fetchTasks();
    }

    fetchTasks = () => {
        fetchTasksList()
            .then(taskList =>
                this.setState({
                    tasks: taskList,
                }))
    }

    createTaskHandler = text => {
        const newTask = {
            text,
            done: false,
        }

        createTask(newTask)
            .then(() => this.fetchTasks());
    }

    deleteTaskHandler = id => {
        deleteTask(id)
            .then(() => this.fetchTasks());
    }

    changeStatusHandler = id => {
        const { done, text } = this.state.tasks.find(task => task.id === id);
        const updatedTask = {
            text,
            done: !done,
        }
        updateTask(id, updatedTask)
            .then(() => this.fetchTasks());
    }


    render() {
        const sortedTasks = this.state.tasks
            .slice()
            .sort((a, b) => a.done - b.done);

        return (
            <div className="todo-list">
                <TaskInput
                    onCreateTask={this.createTaskHandler} />
                <ul className="list">
                    {sortedTasks.map(task =>
                        <Task
                            {...task}
                            key={task.id}
                            onDeleteTask={this.deleteTaskHandler}
                            onChangeStatus={this.changeStatusHandler} />
                    )}
                </ul>
            </div>
        )
    }
}

export default TasksList;