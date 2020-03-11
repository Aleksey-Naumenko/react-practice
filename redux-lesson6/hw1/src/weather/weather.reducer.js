import { CITIES_LIST_RECEIVED } from './weather.actions';

const defaultState = {
    citiesList: null,
}

const citiesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CITIES_LIST_RECEIVED: {
            return {
                ...state,
                citiesList: action.payload.citiesList,
            }
        };
        default: return state;
    }
};

export default citiesReducer;