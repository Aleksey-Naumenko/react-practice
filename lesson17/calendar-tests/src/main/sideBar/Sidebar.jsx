import React from 'react';
import './sidebar.scss';

const Sidebar = () => {
    const hours = Array(24).fill(null);
    return (
        <>
            {hours.map((hour, index) =>
                <div className="sidebar__hour" key={index}>
                    <span className="sidebar__hour-text">
                        {`${index > 10 ? 0 + index : index + 0}:00`}
                    </span>
                </div>)}
        </>
    );
};

export default Sidebar;