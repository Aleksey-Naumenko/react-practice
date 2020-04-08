import React from 'react';
import './calendar-body.scss';
import CalendarDayBar from './CalendarDayBar';
import { findEventsByDay } from './findEvent';
import PropTypes from 'prop-types';


const CalendarBody = ({ week, events, onShowPopup, onDeleteEvent }) => {

    return (
        <div className="calendar__week-bar">

            {week.map((day) => {
                const eventsOnDay = findEventsByDay(events, day);
                return <CalendarDayBar
                    onDeleteEvent={onDeleteEvent}
                    key={day.toISOString()}
                    events={eventsOnDay}
                    onShowPopup={onShowPopup}
                    date={day} />
                })
            }
        </div>
    );
};

export default CalendarBody;

CalendarBody.propTypes = {
    week: PropTypes.array,
    onDeleteEvent: PropTypes.func,
    onShowPopup: PropTypes.func,
    events: PropTypes.array,
};