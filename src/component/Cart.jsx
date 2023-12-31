

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BsCart4 } from 'react-icons/bs';
import { BsCircle } from 'react-icons/bs';
import { remove } from './cartslice';
import './cart.css';
 
import { useNavigate } from 'react-router';
 
const Cart = ({ open, handleClicked }) => {
  const productcart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
 
  const removeToCart = (id) => {
    dispatch(remove(id));
  };
 
  const closeCart = () => {
    handleClicked(false);
  };
 
  if (!open) {
    return null;
  }
 
  const subTotal = productcart.reduce((total, element) => {
    return total + element.price * element.count;
  }, 0);
 
  const handleChecked = () => {
    alert(`Checkout- Subtotal: $ ${subTotal}`);
  };
 
  return (
    <div className='main-cart'>
      <button onClick={closeCart}>
        <h3 className='cross'>X</h3>
      </button>
      <div className='cart-div '>
        <div className='cart-box '>
          <BsCart4 className='cart-icon' />
          <BsCircle className='cart-circles' />
          <h6 className='cartzero'>{productcart.length}</h6>
        </div>
        {productcart.length === 0 ? (
          <p className='p_cart'>
            Add some products in the cart <br />:)
          </p>
        ) : (
          <hr />
        )}
        {productcart.map((element) => (
          <div key={element.id} className='product-item'>
            <div>
              <button
                className='remove-to-cart'
                onClick={() => removeToCart(element.id)}
              >
                X
              </button>
            </div>
            <div>
              <img
                src={element.image}
                alt='product image'
                className='cart-image'
              />
            </div>
            <div>
              <h4 className='title'>{element.title}</h4>
            </div>
            <div>
              <p className='cart-price'>{`$ ${element.price * element.count}`}</p>
            </div>
            <div>
              <h3 className='quantity'>Quantity: {element.count}</h3>
            </div>
          </div>
        ))}
        <hr className='hr-cart' />
        <h3 className='subTotal'>SUBTOTAL</h3>
        <h3 className='subTotalPrice'>$ {subTotal}</h3>
        <div className='checkout' onClick={handleChecked}>
          <h4 className='check-heading'>CHECKOUT</h4>
        </div>
      </div>
    </div>
  );
};
 
export default Cart;
 






