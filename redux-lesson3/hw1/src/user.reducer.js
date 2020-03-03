import { ADD, DELETE } from './user.actions';

export const userReducer = (state = null, action) => {
    switch (action.type) {
        case ADD:
            return {
                user: action.payload.userData,
            };
        case DELETE:
            return {
                user: null
            };
        default:
            return state;
    }
};