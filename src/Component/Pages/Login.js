import React from 'react'
import { useContext, useState } from 'react';
import classes from './Login.module.css'
import CartContext from '../../Store/cart-Context';
import Footer from '../Footer/Footer';
import { useNavigate } from 'react-router-dom';


const Login = () => {
  const cartCTX = useContext(CartContext)
  // console.log(cartCTX)
  const [isLogin, setIsLogin] = useState(cartCTX.isLoggedIn);
  const [enterEmail , setEnterEmail] = useState('')
  const [password , setPassword] = useState('')
  const [userName , setUserName] = useState('')
  const navigate = useNavigate()
  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler=(e)=>{
e.preventDefault();

if(isLogin){
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXSNb20bgVRFykidj_E0BGJzlwNaZSYos',{
    method:'POST',
    body:JSON.stringify({email:enterEmail, password:password ,returnSecureToken:true}) ,
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res=>{
    if(res.ok){
      return res.json()
    }else{
      return res.json().then((data)=>window.alert(data.error.message))
    }
  }).then((res)=>{
    console.log(res)
    cartCTX.login(res.idToken)
    navigate('/')
    localStorage.setItem('email', res.email)
    window.alert('LogIn Successful !!!')
  })

}else{
  // console.log(email , password)
  fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXSNb20bgVRFykidj_E0BGJzlwNaZSYos',{
    method:'POST',
    body:JSON.stringify({email:enterEmail, password:password , fullName : userName , returnSecureToken:true}) ,
    headers:{
      'Content-Type': 'application/json'
    }
  })
  .then(res=>{
    if(res.ok){
      return res.json()
    }else{
      return res.json().then((data)=>window.alert(data.error.message))
    }
  }).then((res)=>{
    cartCTX.login(res.idToken)
    navigate('/')
    window.alert('Sing Up successfull !!!')
  })
}
  }

  const emailHandler=(e)=>{
    setEnterEmail(e.target.value)
  }
  const passwordHandler=(e)=>{
    setPassword(e.target.value)
  }


  return (
    <>
      <h1 className='display-2 d-flex justify-content-center'>The Generics</h1>
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
       {!isLogin &&  <div className={classes.control}>
          <label htmlFor='email'>Your Name</label>
          <input type='text' id='name' required onChange={(e)=>e.target.value}/>
        </div> }
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required onChange={emailHandler}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required onChange={passwordHandler} />
        </div>
        <div className={classes.actions}>
          <button>{isLogin ? 'Login' : 'Create Account'}</button>
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
      
    </section>
    <Footer/>
    </>
  );
};

export default Login;
