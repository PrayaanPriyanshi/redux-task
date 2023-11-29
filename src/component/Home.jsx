// import { useEffect, useState } from 'react'
// import { add } from './cartslice'
// import './home.css'
// import { useDispatch } from 'react-redux'
// import axios from 'axios'
// import Navbar from './Navbar'

// const Home = () => {
//   const dispatch = useDispatch()
//   const [userData, setUserData] = useState([])

//   useEffect(() => {
//     axios.get("https://fakestoreapi.com/products")
//       .then(response => {
//         setUserData(response.data)
//       })
//       .catch(error => {
//         console.error("Error fetching data:", error);
//       });
//   }, []);
  
//   const addToCart = (element) =>{
//     dispatch(add(element))
//   }

//   return (
//     <div>
//     <Navbar></Navbar>
//       <div>
       
//       </div>
//        <div className='main-container'>
   
//       </div>
//       <div>
//         <p className='p_para'>
//           <br /> </p>
//       </div>
//       <div className='main-div'>
//         {
//           userData.map((element) =>(
//             <div>  
//               <div>
//               <img src={element.image} alt = "product image" className='product-img'/>
//               <h4 className='product-title'>{element.title}</h4>
//               <h3 className='price'>$ {element.price}</h3>
//               </div>
//              <div>
//               <button className='add-to-cart' onClick={() => addToCart({...element })}>Add to Cart</button>
//               </div>
//             </div>
//           ))
//         }

//       </div>
//     </div>
//   )
// }

// export default Home




import { useEffect, useState } from 'react';
import { add } from './cartslice';
import './home.css';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Navbar from './Navbar';

const Home = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setUserData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addToCart = (element, quantity) => {
    dispatch(add({ ...element, quantity }));
  };

  return (
    <div>
      <Navbar></Navbar>
      <div>
        {/* ... (any other components or elements you want to include) */}
      </div>
      <div className='main-container'>
        {/* ... (any other components or elements you want to include) */}
      </div>
      <div>
        <p className='p_para'>
          <br />
        </p>
      </div>
      <div className='main-div'>
        {userData.map((element) => (
          <div key={element.id} className='product-container'>
            <div>
              <img src={element.image} alt='product image' className='product-img' />
              <h4 className='product-title'>{element.title}</h4>
              <h3 className='price'>$ {element.price}</h3>
            </div>
            <div className='quantity-and-button'>
              <input
                type='number'
                min='1'
                defaultValue='1'
                className='quantity-input'
              />
              <button
                className='add-to-cart'
                onClick={() => {
                  const quantity = parseInt(document.querySelector('.quantity-input').value, 10);
                  addToCart({ ...element }, quantity);
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

