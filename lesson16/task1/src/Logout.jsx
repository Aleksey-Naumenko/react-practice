import React from "react";

const Logout = ({ onLogout }) => (
    <button className="logout btn" onClick={onLogout}>
        Logout
    </button>
);

export default Logout;