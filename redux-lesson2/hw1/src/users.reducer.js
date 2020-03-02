const initState = {
    usersList: []
};

export const usersReducer = (state = initState, action) => {
    switch (action.type) {
        case 'USER/ADD':
            return {
                ...state,
                usersList: state.usersList.concat(action.user),
            };
        case 'USER/DELETE':
            return {
                ...state,
                usersList: state.usersList.filter(user => user.id !== action.userId),
            };
        default:
            return state 
    }
};