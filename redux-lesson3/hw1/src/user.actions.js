export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE'

export const addUser = userData => {
    return {
        type: ADD,
        payload: userData,
    }
};

export const deleteUser = userId => {
    return {
        type: DELETE,
        payload: userId,
    }
};