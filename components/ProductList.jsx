import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../features/cart/CartSlice';

const products = [
  { id: 1, name: 'Aromatic Lavender', price: 299, image: '🌿' },
  { id: 2, name: 'Medicinal Aloe Vera', price: 199, image: '🥝' },
  { id: 3, name: 'Indoor Snake Plant', price: 399, image: '🌱' },
  { id: 4, name: 'Lucky Bamboo', price: 249, image: '🎋' },
];

function ProductList() {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    alert(`${product.name} added to cart!`);
  };

  return (
    <div className="product-list">
      <h2>🌱 Our Plant Collection</h2>
      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <div className="product-image">{product.image}</div>
            <h3>{product.name}</h3>
            <p className="price">₹{product.price}</p>
            <button 
              onClick={() => handleAddToCart(product)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
