
import React, { useState } from 'react';
import { useEffect } from 'react';
import { add, increment, decrement } from './cartslice';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import Navbar from './Navbar';
 
const Home = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);
  const [clickedItems, setClickedItems] = useState([]);
  const cartItems = useSelector((state) => state.cart);
 
  useEffect(() => {
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);
 
  const addToCart = (element) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((item) => item.id === element.id);
 
    if (existingItem) {
      // If the item exists, update the quantity in the cart
      dispatch(increment(element.id));
      // Update the quantity for the item in the home page
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [element.id]: (prevQuantities[element.id] || 0) + 1,
      }));
    } else {
      // If the item doesn't exist and hasn't been clicked before, add it to the cart
      if (!clickedItems.includes(element.id)) {
        dispatch(add({ ...element, quantity: 1 }));
        setClickedItems((prevClickedItems) => [
          ...prevClickedItems,
          element.id,
        ]);
      }
      // Add the item to the selected items list
      setSelectedItems((prevSelectedItems) => [
        ...prevSelectedItems,
        element.id,
      ]);
      // Update the quantity for the item in the home page
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [element.id]: 1,
      }));
    }
  };
 
  const incrementQuantity = (productId) => {
    // Increment the quantity for the item in the home page
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
    // Increment the quantity in the cart
    dispatch(increment(productId));
  };
 
  const decrementQuantity = (productId) => {
    // Decrement the quantity for the item in the home page
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 1) - 1, 1),
    }));
    // Decrement the quantity in the cart
    dispatch(decrement(productId));
  };
 
  return (
    <div>
      <Navbar />
      <div></div>
      <div className='main-container'></div>
      <div>
        <p className='p_para'>
          <br />
        </p>
      </div>
      <div className='main-div'>
        {userData.map((element) => (
          <div key={element.id} className='product-container'>
            <div>
              <img
                src={element.image}
                alt='product image'
                className='product-img'
              />
              <h4 className='product-title'>{element.title}</h4>
              <h3 className='price'>$ {element.price}</h3>
            </div>
            <div className='quantity-and-button'>
              {selectedItems.includes(element.id) && (
                <div>
                  <button
                    className='minus-button'
                    onClick={() => decrementQuantity(element.id)}
                  >
                    -
                  </button>
                  <span className='quantity-input'>
                    {quantities[element.id] || 1}
                  </span>
                  <button
                    className='plus-button'
                    onClick={() => incrementQuantity(element.id)}
                  >
                    +
                  </button>
                </div>
              )}
              <button
                className='add-to-cart'
                disabled={clickedItems.includes(element.id)}
                onClick={() => {
                  addToCart({ ...element });
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Home;
 
 
 