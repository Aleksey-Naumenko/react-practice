import { FILTER_TEXT } from './users.actions';
import { users } from './users';

const initState = {
    usersList: [...users],
    filterText: '',
    filteredUsers: [],
}

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case FILTER_TEXT: {
            return {
                ...state,
                filterText: action.payload.filterText,
            }
        }
        default:
            return state;
    }
};