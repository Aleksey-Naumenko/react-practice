import { SET, REMOVE } from './user.actions';

export const userReducer = (state = null, action) => {
    switch (action.type) {
        case SET:
            return action.payload.userData;
        case REMOVE:
            return null;
        default:
            return state;
    }
};