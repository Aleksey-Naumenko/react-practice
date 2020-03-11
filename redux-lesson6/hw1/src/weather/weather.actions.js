import {fetchListOfCities} from './weather.gateWay'

export const CITIES_LIST_RECEIVED = 'CITIES_LIST_RECEIVED';

export const citiesListReceived = citiesList => {
    return {
        type: CITIES_LIST_RECEIVED,
        payload: {
            citiesList,
        }
    }
};

export const getCitiesList = () => {
    return function(dispatch, getState) {
        fetchListOfCities()
            .then(citiesList => {
                dispatch(citiesListReceived(citiesList))
            })
    }
};