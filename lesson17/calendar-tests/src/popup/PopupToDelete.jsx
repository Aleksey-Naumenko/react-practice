import React from 'react';
import '../main/event/event.scss';
import PropTypes from 'prop-types';

const PopupToDelete = ({ eventId, onDeleteEvent }) => {
console.log(eventId);
    return (
        <div 
            onClick={() => onDeleteEvent(eventId)}
            className="day-event_delete">
            Delete
        </div>
    );
};

export default PopupToDelete;

PopupToDelete.propTypes = {
    eventId: PropTypes.string,
    onDeleteEvent: PropTypes.func
};