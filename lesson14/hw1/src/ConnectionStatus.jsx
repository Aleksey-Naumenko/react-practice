import React, { useState, useEffect } from 'react';

const ConnectionStatus = () => {
    const [status, setStatus] = useState('online');

    useEffect(() => {
        const onlineHandler = e => {
            setStatus(e.type);
        }
        window.addEventListener('online', onlineHandler);

        const offlineHandler = e => {
            setStatus(e.type);
        }
        window.addEventListener('offline', offlineHandler);

        return () => {
            window.removeEventListener('online', onlineHandler);
            window.removeEventListener('offline', offlineHandler);
        }
    }, []);

    const classes = status === 'online' ?
        "status" : "status status_offline";

    return (
        <div className={classes}>{status}</div>
    );
};

export default ConnectionStatus;