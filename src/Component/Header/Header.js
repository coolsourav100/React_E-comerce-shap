import React, { useContext, useState } from 'react'
import CartContext from '../../Store/cart-Context'
import CartIcon from '../UI/CartIcon'
import { NavLink } from 'react-router-dom'
import classes from './Header.module.css'

const Header = (props) => {
    const cartCTX = useContext(CartContext)

  return (
    <nav className="navbar navbar-light bg-dark d-flex">
  <div className="text-white d-flex justyfy-conternt-space-between">
  <NavLink to='/'><h2 className='ms-4'>Home</h2></NavLink>
    <h2 className='ms-4'>Store</h2>
    <NavLink to='/About'><h2 className='ms-4'>About</h2></NavLink>
  </div>
    <button className="btn btn-outline-success w-10 me-4 my-2 my-sm-0 justify-content-end" type="submit" onClick={props.onShow}><i className="bi bi-cart"></i><CartIcon/><span className="badge badge-light bg-danger ms-2 mt-2">{cartCTX.item.length}</span></button>
  
</nav>
  )
}

export default Header