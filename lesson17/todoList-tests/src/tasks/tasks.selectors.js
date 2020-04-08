import { createSelector } from 'reselect';

export const tasksListSelector = state => state.tasksList.tasks;

export const sortedTasksSelector = createSelector(
    [tasksListSelector],
    (tasksList) => {
        return tasksList.slice().sort((a, b) => a.done - b.done);
    }
);