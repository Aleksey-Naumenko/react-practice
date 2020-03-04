import { ADD, DELETE } from './users.actions';

const initState = {
    usersList: []
};

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD:
            return {
                ...state,
                usersList: state.usersList.concat(action.payload.userData),
            };
        case DELETE:
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== action.payload.userId),
            };
        default:
            return state 
    }
};