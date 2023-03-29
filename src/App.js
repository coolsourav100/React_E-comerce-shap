import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import ListProduct from './Component/Products/ListProduct';
import Banner from './Component/UI/Banner';
import Cart from './Component/Cart/Cart';
import CartContextProvider from './Store/CartContextProdiver';

function App() {
  const[showModal , setShowModal] = useState(false)
  const showHandler=()=>{
setShowModal(!showModal)
  }
  const hideHandler=()=>{
    setShowModal(!showModal)
  }
  return (
    <CartContextProvider>
      <Header onShow={showHandler}/>
      {showModal ? <Cart onHide={hideHandler}/> : null}
      <Banner/>
      <h2 className='display-3 text-center'>Music</h2>
      <ListProduct/>
      <Footer/>
    </CartContextProvider>
  );
}

export default App;
