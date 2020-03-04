export const DECREMENT = 'COUNTER/DECREMENT';
export const INCREMENT = 'COUNTER/INCREMENT';
export const RESET = 'COUNTER/RESET';

export const decrement = () => {
    return {
        type: DECREMENT,
    };
};

export const increment = () => {
    return {
        type: INCREMENT,
    };
};

export const reset = () => {
    return {
        type: RESET,
    };
};