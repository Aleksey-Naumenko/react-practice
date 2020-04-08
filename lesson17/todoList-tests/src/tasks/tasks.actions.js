import * as tasksGateway from './tasksListGateways';
import {tasksListSelector} from './tasks.selectors';

export const SET_TASKS_LIST = 'SET_TASKS_LIST';

export const setTaskList = tasksList => {
    return {
        type: SET_TASKS_LIST,
        payload: {
            tasksList,
        }
    }
};

export const getTasksList = () => {
    return (dispatch) => {
        tasksGateway.fetchTasksList()
            .then(tasksList => {
                dispatch(setTaskList(tasksList))
            })
    };
};

export const createTask = text => {
    return (dispatch) => {
        const newTask = {
            text,
            done: false,
        }
        tasksGateway.createTask(newTask)
            .then(() => dispatch(getTasksList()));
    };
};

export const updateTask = id => {
    return (dispatch, getState) => {
        const state = getState();
        const tasksList = tasksListSelector(state);
        const { done, text } = tasksList.find(task => task.id === id);
        const updatedTask = {
            text,
            done: !done,
        }

        tasksGateway.updateTask(id, updatedTask)
            .then(() => dispatch(getTasksList()));
    };
};

export const deleteTask = id => {
    return (dispatch) => {
        tasksGateway.deleteTask(id)
            .then(() => dispatch(getTasksList()));
    };
};