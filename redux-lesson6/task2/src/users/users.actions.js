export const SHOW_SPINNER = 'SHOW_SPINNER';
export const USER_DATA_RECEIVED = 'USER_DATA_RECEIVED';

export const showSpinner = () => {
    return {
        type: SHOW_SPINNER,
    }
};

export const userDataReceived = userData => {
    return {
        type: USER_DATA_RECEIVED,
        payload: {
            userData,
        }
    }
};

export const getUserData = () => {
    return function () {
        console.log('lol');
    }
};