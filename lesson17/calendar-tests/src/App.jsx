import React, { Component } from 'react';
import Header from './header/Header';
import Week from './weekBar/Week';
import Main from './main/Main';
import Popup from './popup/Popup';
import { getMonday, createDisplayedWeek } from './weekBar/commonFunc';
import { deleteEvent, saveEvent, fetchEvents } from './gateWays';

class App extends Component {
    state = {
        firstDayOfWeek: getMonday(),
        popupShown: false,
        formData: null,
        events: []
    };

    componentDidMount() {
        this.fetchEventsHandler();
        console.log(this.state.events);
    }

    fetchEventsHandler = () => {
        return fetchEvents()
            .then(eventsList => this.setState({ events: eventsList }))
            .catch(err => console.log(err));
    }

    saveEventHandler = event => {
        const newEvent = event;
        const timeFrom = (newEvent.timeFrom).split(':');
        newEvent.dateFrom = new Date(new Date(newEvent.dateFrom).setHours(+timeFrom[0], +timeFrom[1]));
        const timeTo = (newEvent.timeTo).split(':');
        newEvent.dateTo = new Date(new Date(newEvent.dateTo).setHours(+timeTo[0], +timeTo[1]));

        if (newEvent.title === '') {
            newEvent.title = 'No Title';
        };

        saveEvent(newEvent)
            .then(event => {
                const currEvents = this.state.events;
                currEvents.push(event);
                return this.setState({ events: currEvents })})
            .catch(err => console.log(err));
    };

    todayBntSwitcher = () =>
        this.setState({ firstDayOfWeek: getMonday() });

    weekSwitcherForward = () => {
        const firstDay = this.state.firstDayOfWeek;
        const day = firstDay.setDate(firstDay.getDate() + 7);

        this.setState({
            firstDayOfWeek: new Date(day),
        })
    }

    weekSwitcherBackward = () => {
        const firstDay = this.state.firstDayOfWeek;
        const day = firstDay.setDate(firstDay.getDate() - 7);

        this.setState({
            firstDayOfWeek: new Date(day),
        })
    }

    popupSwitcher = () => this.setState({ popupShown: !this.state.popupShown });

    deleteEventHandler = (id) => {
        deleteEvent(id)
            .then(() => this.fetchEventsHandler());
    }

    render() {
        const week = createDisplayedWeek(this.state.firstDayOfWeek);
        return (
            <>
                <Header
                    week={week}
                    onCreateBtn={this.popupSwitcher}
                    onTodayBtnSwitcher={this.todayBntSwitcher}
                    onWeekSwitcherForward={this.weekSwitcherForward}
                    onWeekSwitcherBackward={this.weekSwitcherBackward} />
                <Week week={week} />
                <Main
                    onDeleteEvent={this.deleteEventHandler}
                    week={week}
                    events={this.state.events} />
                {this.state.popupShown && <Popup
                    onHourBarClick={this.fillFormHandler}
                    onSaveEvent={this.saveEventHandler}
                    isShown={this.state.popupShown}
                    onPopupSwitcher={this.popupSwitcher} />}
            </>
        );
    };
};

export default App;