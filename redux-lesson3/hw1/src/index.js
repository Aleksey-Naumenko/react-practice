import store from './store';
import { deleteUser, addUser } from './user.actions';
import { setLanguage } from './language.actions';
import { removeProduct, addProduct } from './cart.actions';

const test = () => {
    store.subscribe(() => console.log(store.getState()));
    store.dispatch(addUser({ id: 100, name: 'Gendalf'}));
    store.dispatch(deleteUser(100));
    store.dispatch(addProduct({ id: 12, name: 'Milk'}));
    store.dispatch(addProduct({ id: 22, name: 'Bread'}));
    store.dispatch(removeProduct(22));
    store.dispatch(setLanguage('us'));
}

test();