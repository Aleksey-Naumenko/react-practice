import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import citiesReducer from './weather/weather.reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
    citiesList: citiesReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware(thunk),
    )
);

export default store;