import React from "react";
const CartContext = React.createContext({
  item:[],
  toAmount:0,
  addCart:(()=>{}),
  removeCart:(()=>{})
})

export default CartContext;