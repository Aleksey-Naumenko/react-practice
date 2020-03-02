import { createStore } from 'redux';
import { usersReducer } from './users.reducer';

export const store = createStore(usersReducer);