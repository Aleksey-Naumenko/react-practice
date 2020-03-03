import { ADD_PRODUCT, DELETE_PRODUCT } from './cart.actions';

const cart = {
    products: [],
};

export const cartReducer = (state = cart, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: state.products.concat(action.payload)
            };
        case DELETE_PRODUCT:
            const newProdList = state.products
                .filter(product => product.id !== action.payload);
            return {
                ...state,
                products: newProdList,
            };
        default:
            return state;
    };
};