import React, { useState, useEffect } from 'react';
import moment, { utc } from 'moment';


const Clock = ({ location, offset }) => {
    const [localTime, setLocalTime] = useState(null);

    const getLocaleTime = offset => {   
        const setHours = new Date().setHours(new Date().getHours() + offset);
        const formatTime = moment(setHours).format('LTS');
        return formatTime;
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setLocalTime(getLocaleTime(offset));
        }, 1000);

        return () => clearInterval(intervalId);
    })

    return (
        <div className="clock">
            <div className="clock__location">
                {location}
            </div>
            <div className="clock__time">
                {localTime}
            </div>
        </div>
    );
};

export default Clock;