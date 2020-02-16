import React from 'react';


const ProductsList = ({ cartItems }) => {
    const totalPrice = cartItems.reduce((acc, {price}) => acc + price, 0);

    return (
        <div className="products">
            <ul className="products__list">
                {cartItems.map(product =>
                    <li className="products__list-item" key={product.id}>
                        <span className="products__item-name">{product.name}</span>
                        <span className="products__item-price">{`$${product.price}`}</span>
                    </li>
                )}
            </ul>
            <div className="products__total">{`Total: $${totalPrice}`}</div>
        </div>
    );
};

export default ProductsList;