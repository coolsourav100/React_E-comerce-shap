import 'bootstrap/dist/css/bootstrap.min.css';
import { Children, useState } from 'react';
import Footer from './Component/Footer/Footer';
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
function App() {
  const[showModal , setShowModal] = useState(false)
  const showHandler=()=>{
setShowModal(!showModal)
  }
  const hideHandler=()=>{
    setShowModal(!showModal)
  }
  return (
      <BrowserRouter>
    <CartContextProvider>
    
      <Header onShow={showHandler}/>
      {showModal ? <Cart onHide={hideHandler}/> : null}
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='About' element={<About/>}/>
        <Route path='Store' element={<Store/>}/>
        <Route path='Contact' element={<Contact/>}/>
        <Route path='Store/:id' element={<Product/>}/>
        </Routes>
      <Footer/>
      
    </CartContextProvider>
      </BrowserRouter>
  );
}

export default App;
