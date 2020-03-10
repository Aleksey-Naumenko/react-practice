export const isFetchingSelector = state => {
    return state.users.isFetching;
};

export const userDataSelector = state => {
    return state.users.userData;
};