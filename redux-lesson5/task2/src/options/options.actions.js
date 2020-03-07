export const TOOGLE_OPTION = 'OPTIONS/TOOGLE_OPTION';

export const toogleOption = optionId => {
    return {
        type: TOOGLE_OPTION,
        payload: {
            optionId,
        }
    }
}