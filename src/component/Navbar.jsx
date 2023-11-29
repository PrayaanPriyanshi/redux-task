import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.css'
import { BsCart4 } from 'react-icons/bs';
import { BsCircle } from 'react-icons/bs'
// import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Cart from './Cart';
const Navbar = () => {
    const[isOpen, setIsOpen] = useState(false)
    const cartProducts = useSelector(state => state.cart)
    const handleCartClick = (data) =>{
        setIsOpen(data)
    }


    return (
        <>
           
            {/* <Link to="/cart"> */}
            <div onClick={()=>setIsOpen(true)}>
                
            <BsCart4 className='fabicon' />
                <BsCircle className='cart-circle'/><h6 className='zero'>{cartProducts.length}</h6>
            </div>
            {/* </Link> */}
            <div className='main-profile'>
            <div className='mid-content'>
                <div>
                    <Link to = 'cart'><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScLoTQ5nV_naOiwT4lJTtWrY8rLFGt5Rbp0w&usqp=CAU" alt="" className='mid-image' /></Link>
                    
                </div>
                <div>
                    
                <h5>Work in India<span ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vSSxBfsurwHrgVFxbUyEbAugLAlEUY9OOw&usqp=CAU" alt="" className='flag-img'/></span></h5>
                <p>Hi! I'm manisha <br/>React Developer, <span><Link to = "https://www.linkedin.com/feed/?trk=homepage-basic_sign-in-submit"><h5 className='link'>follow me on Linkedin.</h5></Link></span></p>
                </div>
                </div>
                
            </div>
            {isOpen && <Cart open = {isOpen} handleClicked = {handleCartClick}/>}
        </>
    )
}

export default Navbar
