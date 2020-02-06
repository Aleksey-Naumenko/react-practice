import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const rootElem = document.querySelector('.page');
const styles = {
    color: 'red',
    fontWeight: 700
};

const elem = (
    <form className="login-form">
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
            <label className="form-label" htmlFor="name">Name</label>
            <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                value="anonymous"
            />
        </div>
        <div className="form-control">
            <label className="form-label" id="age" htmlFor="age">Age</label>
            <input
                className="form-input"
                type="number"
                value={17}
                name="age"
            />
            <span style={styles}>To young</span>
        </div>
        <button className="submit-button" type="submit">Submit</button>
    </form>
);

ReactDOM.render(elem, rootElem);