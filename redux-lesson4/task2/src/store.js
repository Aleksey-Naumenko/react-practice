import { createStore, combineReducers } from 'redux';
import {counterReducer} from './counter.reducer';
import {usersReducer} from './users/users.reducer';

const reducer = combineReducers({
    users: usersReducer,
    counter: counterReducer,
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;