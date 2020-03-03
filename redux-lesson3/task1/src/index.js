import store from './store';

import { increment, decrement, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => console.log(store.getState()));

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());


store.dispatch(addUser({name: 'Bobi', age: 1000, id: 2}));
store.dispatch(updateUser(2, {name: 'Bobins', age: 1001}));