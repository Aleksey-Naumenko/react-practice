import React from "react";

const Login = ({ onLogin }) => (
    <button className="login btn" onClick={onLogin}>
        Login
    </button>
);

export default Login;