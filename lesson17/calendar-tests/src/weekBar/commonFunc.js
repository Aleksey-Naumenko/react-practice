export const getMonday = () => {

    const currDate = new Date();
    let firstDay = null;

    for (let i = 0; i <= 7; i++) {
        if (currDate.getDay() !== 1) {
            currDate.setDate(currDate.getDate() - 1);

        } else {
            firstDay = currDate;
        }
    }
    return firstDay;
}

export const createDisplayedWeek = firstDay => {
    const week = Array(7).fill(null);
    let firstDayOfWeek = new Date(firstDay);

    const newWeek = week.map(day => {
        day = new Date(firstDayOfWeek);
        firstDayOfWeek.setDate(firstDayOfWeek.getDate() + 1);
        return day;
    });
    return newWeek;
}