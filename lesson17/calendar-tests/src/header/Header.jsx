import React from 'react';
import './header.scss';
import { displayMonth } from './headerLogic';
import PropTypes from 'prop-types';


const Header = ({ week, onTodayBtnSwitcher, onWeekSwitcherForward, onWeekSwitcherBackward, onCreateBtn }) => {
    const currentMonth = displayMonth(week);
    return (
        <header className="header">
            <button data-id="create-btn"
                onClick={onCreateBtn}
                className="header__button_create">
                <i className="fas fa-plus"></i>
                Create
            </button>
            <button
                className="header__button_today"
                onClick={onTodayBtnSwitcher}
            >Today</button>
            <div className="header__week-toggle">
                <span
                    onClick={onWeekSwitcherBackward}
                    className="header__week-toggle_chevron-left">
                    <i className="fas fa-chevron-left chevron"></i>
                </span>
                <span
                    onClick={onWeekSwitcherForward}
                    className="header__week-toggle_chevron-right">
                    <i className="fas fa-chevron-right chevron"></i>
                </span>
            </div>
            <span className="header__current-month-year">{currentMonth}</span>

        </header>
    );
};

export default Header;

Header.propTypes = {
    week: PropTypes.array,
    onCreateBtn: PropTypes.func,
    onTodayBtnSwitcher: PropTypes.func,
    onWeekSwitcherForward: PropTypes.func,
    onWeekSwitcherBackward: PropTypes.func
};