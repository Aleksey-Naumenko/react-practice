export const languageReducer = (state = 'en', action) => {
    switch(action.type) {
        case 'language':
            return action.payload.language;
        default:
            return state;
    }
}