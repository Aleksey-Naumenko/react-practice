const ADD = 'USER/ADD';
const DELETE = 'USER/DELETE'

export const addUser = data => {
    return {
        type: ADD,
        user: data,
    }
};

export const deleteUser = id => {
    return {
        type: DELETE,
        userId: id,
    }
};