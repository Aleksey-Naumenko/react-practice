import React, { Component } from 'react';
import './popup.scss';
import { createPopupButton } from './popupLogic';
import PropTypes, { bool } from 'prop-types';

class Popup extends Component {
    state = {
        title: '',
        dateFrom: '',
        dateTo: '',
        timeFrom: '',
        timeTo: '',
        colorChooser: '#293dce',
        description: '',
        id: '',
    };

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    componentDidMount() {
        const newPopup = createPopupButton();
        this.setState({
            ...newPopup
        })
    }

    onSubmit = e => {
        e.preventDefault();
        const newEvent = this.state;
        this.props.onSaveEvent(newEvent);
        this.props.onPopupSwitcher();
    }

    render() {
        return (
            <div className="popup-modal">
                <form className="popup" onSubmit={this.onSubmit}>
                    <div className="popup__header">
                        <i className="fas fa-times popup__header_close-btn" onClick={this.props.onPopupSwitcher}></i>
                        <input
                            className="popup__header_title-input"
                            type="text" name="title"
                            placeholder="Add Title"
                            value={this.state.title}
                            onChange={this.changeHandler} />
                    </div>
                    <div className="popup__color-scheme">
                        <label className="popup__color-scheme_label">
                            <span className="popup__color-scheme_label-text">Choose a color</span>
                            <input
                                className="popup__color-scheme_chooser"
                                type="color" name="colorChooser"
                                value={this.state.colorChooser}
                                onChange={this.changeHandler} />
                        </label>
                    </div>
                    <div className="popup__info">
                        <div className="popup__info_icon"><i className="far fa-clock"></i></div>
                        <input
                            className="popup__info_date-from"
                            type="date" name="dateFrom"
                            value={this.state.dateFrom}
                            onChange={this.changeHandler} />
                        <div className="popup__info_duration">
                            <input
                                className="popup__info_duration-from"
                                name="timeFrom" type="time"
                                value={this.state.timeFrom}
                                onChange={this.changeHandler} />
                            <div className="popup__info_duration-line"> - </div>
                            <input
                                className="popup__info_duration-to"
                                name="timeTo" type="time"
                                value={this.state.timeTo}
                                onChange={this.changeHandler} />
                        </div>
                        <input
                            className="popup__info_date-to"
                            type="date" name="dateTo"
                            value={this.state.dateTo}
                            onChange={this.changeHandler} />
                    </div>

                    <div className="popup__description">
                        <div className="popup__description_icon"><i className="fas fa-align-left"></i></div>
                        <input
                            className="popup__description_text"
                            type="text" name="description"
                            placeholder="Add Description"
                            value={this.state.description}
                            onChange={this.changeHandler} />
                    </div>

                    <div className="popup__action">
                        <span className="popup__action_delete" data-id="913" style={{ visibility: "hidden" }}><i className="fas fa-trash-alt"></i></span>
                        <button
                            className="popup__action_save"
                            type="submit"
                            >Save</button>
                    </div>
                </form>
            </div>
        );
    }
};

export default Popup;

Popup.propTypes = {
    onHourBarClick: PropTypes.func,
    onSaveEvent: PropTypes.func,
    onPopupSwitcher: PropTypes.func,
    isShown: bool
};