import React, { useContext } from 'react';
import classes from './Header.module.css'
import CartContext from '../../Store/cart-Context';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const cartCTX = useContext(CartContext)
  const navigate = useNavigate()
  const clickHandler=(e)=>{
  cartCTX.logout();
  navigate('/');
  window.alert('LogOut successfull!!!')

  }
  return (
    <>
    <button className={classes.button} onClick={clickHandler}> Log Out</button>
    </>
  )
}

export default Logout