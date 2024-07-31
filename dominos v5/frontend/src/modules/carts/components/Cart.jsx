import React, { useContext } from 'react';
import './styles/cart.css';
import { CartContext } from '../../dashboard/context/cart-context';
import { Pay } from '../../payment/components/Pay';

export const Cart = () => {
  const ctx = useContext(CartContext);

  const total = () => {
    return ctx.carts.reduce((sum, product) => sum + parseFloat(product.price), 0).toFixed(2);
  };

  const onRemoveFromCart = (productId) => {
    ctx.removeCart(productId);
  };

  return (
    <div>
      <p>Total Items in Cart {ctx.carts.length}</p>
      {ctx.carts.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.assets.menu['0'].url} alt="pizza11" className="cart-item-image"/>
          <p>{item.name}</p>
          <p>₹ {item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <button className="remove-btn" onClick={() => onRemoveFromCart(item.id)}>Remove</button>
        </div>
      ))}
      <p>Total Bill is ₹ {total()}</p>
      {ctx.carts.length > 0 && <Pay total={total()} />}
    </div>
  );
};
