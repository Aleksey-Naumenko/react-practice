import { createStore, combineReducers } from 'redux';
import { languageReducer } from './language.reducer';
import { cartReducer } from './cart.reducer';
import { userReducer } from './user.reducer';

const appReducer = combineReducers({
    language: languageReducer,
    cart: cartReducer,
    user: userReducer,
});

const store = createStore(appReducer);

export default store;



// export const initState = {
//     language: 'en',
//     user: null,
//     cart: {
//         products: [],
//     },
// };