export const setLanguage = language => {
    return {
        type: 'language',
        payload: {
            language,
        }
    };
};