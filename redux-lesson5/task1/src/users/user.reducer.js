import { PREV, NEXT } from './user.actions';
import { users } from './users';

const initState = {
    usersList: [...users],
    currentPage: 0,
}

export const switchPageReducer = (state = initState, action) => {
    switch (action.type) {
        case PREV:
            return {
                ...state,
                currentPage: state.currentPage - 1,
            };
        case NEXT:
            return {
                ...state,
                currentPage: state.currentPage + 1,
            };
        default:
            return state;
    }
};