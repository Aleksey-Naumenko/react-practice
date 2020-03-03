export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE'

export const setUser = userData => {
    return {
        type: ADD,
        payload: {
            userData,
        }
    }
};

export const removeUser = () => {
    return {
        type: DELETE,
    }
};