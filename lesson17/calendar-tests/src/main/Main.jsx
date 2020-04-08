import React from 'react';
import CalendarBody from './CalendarBody';
import Sidebar from './sideBar/Sidebar';
import PropTypes from 'prop-types';

const Main = ({ week, events, onShowPopup, onDeleteEvent }) => {

    return (
        <div className="main-part">
            <div className="sidebar">
                <Sidebar />
            </div>
            <div className="calendar">
                <CalendarBody
                    onDeleteEvent={onDeleteEvent}
                    week={week}
                    events={events}
                    onShowPopup={onShowPopup} />
            </div>
        </div>
    );
};

export default Main;

Main.propTypes = {
    week: PropTypes.array,
    onDeleteEvent: PropTypes.func,
    events: PropTypes.array,
};