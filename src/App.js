import 'bootstrap/dist/css/bootstrap.min.css';
import { Children, useContext, useState } from 'react';

import Header from './Component/Header/Header';
import Banner from './Component/UI/Banner';
import Cart from './Component/Cart/Cart';
import CartContextProvider from './Store/CartContextProdiver';
import { Route  ,BrowserRouter, Routes } from 'react-router-dom';
// import { Route } from 'react-router-dom';
import Home from './Component/Pages/Home';
import About from './Component/Pages/About';
import Store from './Component/Pages/Store';
import Contact from './Component/Pages/Contact';
import Product from './Component/Products/Product';
import Login from './Component/Pages/Login';
import CartContext from './Store/cart-Context';
function App() {
  const[showModal , setShowModal] = useState(false)
  const showHandler=()=>{
setShowModal(!showModal)
  }
  const hideHandler=()=>{
    setShowModal(!showModal)
  }
  const cartCTX = useContext(CartContext)
  const isLoggedIn = cartCTX.isLoggedIn
  return (
      <BrowserRouter>
    
      <Header onShow={showHandler}/>
      {showModal ? <Cart onHide={hideHandler}/> : null}
      
      <Routes>
        {!isLoggedIn && (<Route path='/' element={<Login/>}/>)}
        {isLoggedIn && <Route path='/' element={<Home/>}/>}
        {isLoggedIn && <Route path='About' element={<About/>}/>}
        {isLoggedIn && <Route path='Store' element={<Store/>}/>}
        {isLoggedIn && <Route path='Contact' element={<Contact/>}/>}
        {isLoggedIn && <Route path='Store/:id' element={<Product/>}/>}
        </Routes>
      
    
      </BrowserRouter>
  );
}

export default App;
