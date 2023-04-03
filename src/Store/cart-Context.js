import React from "react";
const CartContext = React.createContext({
  item:[],
  toAmount:0,
  addCart:(()=>{}),
  removeCart:(()=>{}),
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  toggle:'',
  toggleHandler:(toggle)=>{},
})

export default CartContext;