export const findEventsByDay = (events, day) => {
    
  return events.filter(event => {
    return new Date(day).getDate() === new Date(event.dateFrom).getDate() &&
    new Date(day).getMonth() === new Date(event.dateFrom).getMonth()
  });
  };

export const findEventsByHour = (events, hour) => {
    const targetEvent = events.filter(event => hour === new Date(event.dateFrom).getHours());
    const [ event ] = targetEvent;
    return event; 
};