import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Day = ({ day }) => {
    const dayDate = new Date(day).getDate();
    const dayName = moment(new Date(day)).format('ddd');

    const classNa = new Date(day).toDateString() !== new Date().toDateString() ?
        "day-date" : "day-date day-date_current";

    return (
        <div className="day">
            <span className="day-name">{dayName}</span>
            <div className={classNa}>{dayDate}</div>
        </div>
    );
};

export default Day;

Day.propTypes = {
    day: PropTypes.object
};