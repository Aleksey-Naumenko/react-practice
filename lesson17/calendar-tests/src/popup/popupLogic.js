export const createPopupButton = () => {

    const date = new Date();
    const newEvent = {};
    newEvent.title = '';
    newEvent.dateFrom = date.toLocaleDateString().split('.').reverse().join('-');
    newEvent.dateTo = date.toLocaleDateString().split('.').reverse().join('-');
    if (date.getHours() === 23) {
        newEvent.timeFrom = `${date.getHours()}:00`;
        newEvent.timeTo = `${date.getHours()}:59`;
    } else if (date.getHours() === 9) {
        newEvent.timeFrom = `0${date.getHours()}:00`;
        newEvent.timeTo = `${date.getHours() + 1}:00`;
    } else if (date.getHours() > 9) {
        newEvent.timeFrom = `${date.getHours()}:00`;
        newEvent.timeTo = `${date.getHours() + 1}:00`;
    } else {
        newEvent.timeFrom = `0${date.getHours()}:00`;
        newEvent.timeTo = `0${date.getHours() + 1}:00`;
    }
    newEvent.colorChooser = '#26ecdb';
    newEvent.description = '';
    newEvent.id = Math.floor(Math.random() * 1000);

    return newEvent;
};