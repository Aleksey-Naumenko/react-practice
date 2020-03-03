import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter.reducer';
import { usersReduсer } from './users.reducer';

const appReducer = combineReducers({
    counter: counterReducer,
    users: usersReduсer,
});

const store = createStore(appReducer);

export default store;