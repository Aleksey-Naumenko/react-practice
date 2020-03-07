import { createSelector } from 'reselect';

export const optionsListSelector = state => {
    return state.options.optionsList;
};

export const selectedIdsSelector = state => {
    return state.options.selected;
};

export const selectedOptionsSelector = createSelector(
    [optionsListSelector, selectedIdsSelector],
    (optionsList, selectedIds) => {
        return optionsList.filter(option => selectedIds.includes(option.id));
    });

export const availableOptionsSelector = createSelector(
    [optionsListSelector, selectedIdsSelector],
    (optionsList, selectedIds) => {
        return optionsList.filter(option => !selectedIds.includes(option.id));
    });