import store from './store';
import { deleteUser } from './users.actions';
import { addUser } from './users.actions';

const test = () => {
    store.subscribe(() => console.log(store.getState()));
    store.dispatch(addUser({ id: 100, name: 'Gendalf'}));
    store.dispatch(addUser({ id: 12, name: 'Bilbo'}));
    store.dispatch(addUser({ id: 22, name: 'Pipin'}));
    // store.dispatch(deleteUser(22));

}

test();