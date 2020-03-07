import { options } from './optionsData';
import {TOOGLE_OPTION} from './options.actions';

const initState = {
    optionsList: [...options],
    selected: [],
};

const optionsReducer = (state = initState, action) => {
    switch(action.type) {
        case TOOGLE_OPTION: {
            const {optionId} = action.payload;
            const newSelectedIds = state.selected.includes(optionId) ?
                state.selected.filter(id => id !== optionId) :
                state.selected.concat(optionId);
            return {
                ...state,
                selected: newSelectedIds,
            }
        }
        default:
            return state;
    }
};

export default optionsReducer;