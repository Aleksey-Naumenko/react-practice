export const languageReducer = (state = 'en', action) => {
    switch(action.type) {
        case 'language':
            return {
                language: action.payload.language,
            };
        default:
            return state;
    }
}