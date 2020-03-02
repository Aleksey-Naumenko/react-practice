import { usersReducer } from './users.reducer';
import { store } from './store';
import { deleteUser } from './users.actions';
import { addUser } from './users.actions';

const test = () => {

    store.dispatch(addUser({ name: 'Gendalf', id: 100}));
    store.dispatch(addUser({ name: 'Bilbo', id: 12}));
    store.dispatch(addUser({ name: 'Pipin', id: 22}));
    // store.dispatch(deleteUser(22));

    console.log(store.getState());
}

test();