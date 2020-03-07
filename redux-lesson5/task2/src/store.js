import { createStore, combineReducers } from 'redux';
import optionsReducer from './options/options.reducer';


const reducer = combineReducers({
    options: optionsReducer,
});

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSIONS__ &&
        window.__REDUX_DEVTOOLS_EXTENSIONS__(),
);

export default store;