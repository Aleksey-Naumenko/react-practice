const baseUrl = 'https://5e6213046f5c7900149bc94d.mockapi.io/events';

export const fetchEvents = () => {
    return fetch(baseUrl)
        .then(response => response.json());
};

export const fetchOneEvent = id => {
    return fetch(`${baseUrl}/${id}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Internal Server Error. Can't display events");
        });
};

export const saveEvent = eventData => {
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(eventData),
    })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error("Internal Server Error. Can't save event");
        })
};

export const deleteEvent = eventId => {
    return fetch(`${baseUrl}/${eventId}`, {
        method: 'DELETE'
    })
};