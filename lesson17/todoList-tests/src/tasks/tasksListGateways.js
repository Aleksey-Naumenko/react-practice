const baseurl =
    'https://5e6213046f5c7900149bc94d.mockapi.io/tasks';


export const fetchTasksList = () => {
    return fetch(baseurl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
};

export const createTask = taskData => {
    return fetch(baseurl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to Fetch Data!');
            }
        })
};

export const updateTask = (taskId, taskData) => {
    return fetch(`${baseurl}/${taskId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(taskData),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to Update Data!');
            }
        })
};

export const deleteTask = taskId => {
    return fetch(`${baseurl}/${taskId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to Delete Data!');
            }
        })
};

