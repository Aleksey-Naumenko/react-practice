import { INCREMENT, DECREMENT } from './counter.actions';

const defaultState = {
    counter: 0,
}

export const counterReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            };
        case DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            };
        default: return state;
    }
}