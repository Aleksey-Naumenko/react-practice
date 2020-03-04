import { ADD, DELETE } from './user.actions';

export const userReducer = (state = null, action) => {
    switch (action.type) {
        case ADD:
            return action.payload.userData;
        case DELETE:
            return null;
        default:
            return state;
    }
};