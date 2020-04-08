export const displayMonth = (week) => {
    let arrMonth = [];
    let arrYear = [];
    let result;
    for (let i = 0; i < week.length; i++) {

        let month = week[i].toDateString().split(' ')[1];
        let year = week[i].toDateString().split(' ')[3];

        if (arrMonth.indexOf(month) === -1) {
            arrMonth.push(month);
        };
        if (arrYear.indexOf(year) === -1) {
            arrYear.push(year);
        }
    }
    if (arrMonth.length === 1) {
        result = `${arrMonth[0]} ${arrYear[0]}`;
    }
    if (arrMonth.length === 2) {
        result = `${arrMonth[0]} - ${arrMonth[1]} ${arrYear[0]}`;
    }
    if (arrYear.length === 2) {
        result = `${arrMonth[0]} ${arrYear[0]} - ${arrMonth[1]} ${arrYear[1]}`;
    }
    return result;
}