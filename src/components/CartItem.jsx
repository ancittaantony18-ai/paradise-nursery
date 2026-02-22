import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../features/cart/CartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeItem(item.id));
  };

  const handleQuantityChange = (newQuantity) => {
    dispatch(updateQuantity({ id: item.id, quantity: newQuantity }));
  };

  const totalPrice = item.price * item.quantity;

  return (
    <div className="cart-item">
      <div className="cart-item-image">{item.image}</div>
      <div className="cart-item-details">
        <h4>{item.name}</h4>
        <p>₹{item.price}/plant</p>
      </div>
      <div className="quantity-controls">
        <button onClick={() => handleQuantityChange(item.quantity - 1)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => handleQuantityChange(item.quantity + 1)}>+</button>
      </div>
      <div className="cart-item-total">₹{totalPrice}</div>
      <button className="remove-btn" onClick={handleRemove}>Remove</button>
    </div>
  );
}

export default CartItem;
