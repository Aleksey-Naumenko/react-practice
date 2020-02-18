
const baseurl =
    'https://crudcrud.com/api/085f0816fd0042cc9657d2cc2478ee74/tasks';


export const fetchTasksList = () => {
    return fetch(baseurl)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(tasksList => tasksList
            .map(({ _id, ...rest }) => ({ id: _id, ...rest })))
}

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
                throw new Error('Faaaailed!!!!');
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
                throw new Error('Faaaailed to update!!!!');
            }
        })
};

export const deleteTask = taskId => {
    return fetch(`${baseurl}/${taskId}`, {
        method: 'DELETE'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Faaaailed to delete!!!!');
            }
        })
}

