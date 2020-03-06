export const PREV = 'PAGE/GO_PREV';
export const NEXT = 'PAGE/GO_NEXT';

export const goPrev = () => {
    return {
        type: PREV,
    }
};

export const goNext = () => {
    return {
        type: NEXT,
    }
};