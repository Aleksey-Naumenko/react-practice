import React, { Component } from "react";
import "./event.scss";
import PopupToDelete from "../../popup/PopupToDelete";
import PropTypes from "prop-types";

class Event extends Component {
  state = {
    showDeletePopup: false
  };

  onShowHidePopup = () => {
    this.setState({ showDeletePopup: !this.state.showDeletePopup });
  };

  render() {
    const event = this.props.event;
    const height =
      (new Date(event.dateTo) - new Date(event.dateFrom)) / 1000 / 60;
    const marginTop = new Date(event.dateFrom).getMinutes();
    const styles = {
      height: `${height}px`,
      marginTop: `${marginTop}px`,
      background: `${event.colorChooser}`
    };

    const hoursFrom = new Date(event.dateFrom).getHours();
    const minutesFrom =
      new Date(event.dateFrom).getMinutes() < 10
        ? `${new Date(event.dateFrom).getMinutes()}0`
        : new Date(event.dateFrom).getMinutes();

    const hoursTo = new Date(event.dateTo).getHours();
    const minutesTo =
      new Date(event.dateTo).getMinutes() < 10
        ? `${new Date(event.dateTo).getMinutes()}0`
        : new Date(event.dateTo).getMinutes();

    return (
      <>
        <div
          style={styles}
          className="day-event"
          onClick={e => this.onShowHidePopup(e)}
          id={this.props.id}
        >
          {this.state.showDeletePopup && (
            <PopupToDelete
              eventId={this.props.id}
              onDeleteEvent={this.props.onDeleteEvent}
            />
          )}

          <span>{this.props.event.title}</span>
          <br />
          <span>{`${hoursFrom}:${minutesFrom} - ${hoursTo}:${minutesTo}`}</span>
        </div>
      </>
    );
  }
}

export default Event;

Event.propTypes = {
  onDeleteEvent: PropTypes.func,
  id: PropTypes.string,
  event: PropTypes.object
};
