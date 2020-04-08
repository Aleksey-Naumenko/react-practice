import React from 'react';
import './days.scss';
import Day from './Day';
import PropTypes from 'prop-types';

const Week = ({ week }) => {
    return (
        <nav className="days-container">
            <div className="gmt">gmt+02</div>
            {week.map(day =>
                <Day key={day.getDate()} day={day}/>
            )}
        </nav>
    );
};

export default Week;

Week.propTypes = {
    week: PropTypes.array
};
