import { SET_TASKS_LIST } from './tasks.actions';

const defaultState = {
    tasks: [],
};

const tasksReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_TASKS_LIST:
            return {
                ...state,
                tasks: action.payload.tasksList,
            }
        default: return state;
    };
};

export default tasksReducer;