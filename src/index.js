import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import CartContextProvider from './Store/CartContextProdiver';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </CartContextProvider>
);

