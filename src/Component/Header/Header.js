import React from 'react'
import CartIcon from '../UI/CartIcon'

const Header = () => {
  return (
    <nav className="navbar navbar-light bg-dark d-flex">
  <a className="navbar-brand text-white d-flex justyfy-conternt-space-between">
    <h2 className='ms-4'>Home</h2>
    <h2 className='ms-4'>Store</h2>
    <h2 className='ms-4'>About</h2>
  </a>
    <button className="btn btn-outline-success w-10 me-4 my-2 my-sm-0 justify-content-end" type="submit"><i className="bi bi-cart"></i><CartIcon/><span className="badge badge-light">9</span></button>
  
</nav>
  )
}

export default Header