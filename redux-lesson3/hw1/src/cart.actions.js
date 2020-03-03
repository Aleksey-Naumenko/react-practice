export const ADD_PRODUCT = 'CART/ADD_PRODUCT';
export const DELETE_PRODUCT = 'CART/DELETE_PRODUCT';

export const addProduct = productData => {
    return {
        type: ADD_PRODUCT,
        payload: productData,
    }
};

export const removeProduct = productId => {
    return {
        type: DELETE_PRODUCT,
        payload: productId,
    }
};