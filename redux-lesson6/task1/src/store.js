import { createStore, applyMiddleware, compose } from 'redux';
import counterReducer from './counter.reducer';

const logger = store => next => action => {
    console.group(action.type);
    console.info('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    // return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    counterReducer,
    composeEnhancers(
        applyMiddleware(logger),
    )
);

export default store;