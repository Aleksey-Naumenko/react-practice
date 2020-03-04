export const SET = 'USER/SET';
export const REMOVE = 'USER/REMOVE'

export const setUser = userData => {
    return {
        type: SET,
        payload: {
            userData,
        }
    }
};

export const removeUser = () => {
    return {
        type: REMOVE,
    }
};