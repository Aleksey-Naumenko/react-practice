import { createStore, combineReducers } from 'redux';
import { switchPageReducer } from './users/user.reducer';

const reducer = combineReducers({
    users: switchPageReducer,
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;