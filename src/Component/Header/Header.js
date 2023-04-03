import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../Store/cart-Context'
import CartIcon from '../UI/CartIcon'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'
import Logout from './Logout'
import Login from '../Pages/Login'

const Header = (props) => {
  const [badge , setBadge] = useState(0)
  const email =localStorage.getItem('email').replace(/[@,.]/g,'-')
  const cartCTX = useContext(CartContext)
  const [toggle , setToggle] = useState(cartCTX.toggle)
  
  //  useEffect(()=>{
  //  fetch(`https://crudcrud.com/api/f21e04e12fb54697910bb3dd7b5296a7/cart${email}`)
  //  .then((res)=>res.json())
  //  .then((res)=>{
  //   setToggle(!toggle)
  //   setBadge(res.length)})
  //  .catch(err=>console.log(err))
  //  },[toggle])

  return (
    <nav className="navbar navbar-light bg-dark d-flex">
  <div className="text-white d-flex justyfy-conternt-space-between">
  {cartCTX.isLoggedIn && <NavLink to='/'><h2 className='ms-4'>Home</h2></NavLink>}
  {cartCTX.isLoggedIn && <NavLink to='/Store'><h2 className='ms-4'>Store</h2></NavLink>}
    {cartCTX.isLoggedIn && <NavLink to='/About'><h2 className='ms-4'>About</h2></NavLink>}
    {cartCTX.isLoggedIn && <NavLink to='/Contact'><h2 className='ms-4'>Contact Us</h2></NavLink>}
  </div>
  {cartCTX.isLoggedIn && <Logout/>}
    {cartCTX.isLoggedIn && <button className="btn btn-outline-success w-10 me-4 my-2 my-sm-0 justify-content-end" type="submit" onClick={props.onShow}><i className="bi bi-cart"></i><CartIcon/><span className="badge badge-light bg-danger ms-2 mt-2">{badge}</span></button>}
  
</nav>
  )
}

export default Header