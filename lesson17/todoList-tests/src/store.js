import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import tasksReducer from './tasks/tasks.reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    tasksList: tasksReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk),
    )
);

export default store;