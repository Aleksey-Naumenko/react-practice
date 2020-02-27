import React from 'react';

const Product = ({ match }) => {
    return (
    <div className="product">{`The product is ${match.params.productId}`}</div>
    );
};

export default Product;