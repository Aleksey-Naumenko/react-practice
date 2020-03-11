import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {citiesListSelector} from './weather.selectors';
import * as weatherActions from './weather.actions';

const Weather = ({ cities, getWeatherData }) => {

    useEffect(() => {
        getWeatherData();
    }, []);

    return (
        <main className="weather">
            <h1 className="weather__title">Weather data</h1>
            <ul className="cities-list">
                {cities && cities.map(city => (
                    <li className="city">
                        <span className="city__name">{city.name}</span>
                        <span className="city__temperature">{city.temperature}</span>
                    </li>
                ))}
            </ul>
        </main>
    );
};

const mapState = state => {
    return {
        cities: citiesListSelector(state),
    }
};

const mapDisptch = {
    getWeatherData: weatherActions.getWeatherData,
}

export default connect(mapState, mapDisptch)(Weather);