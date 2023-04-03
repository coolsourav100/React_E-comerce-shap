import { useReducer, useState } from "react"
import CartContext from "./cart-Context"
 const defaultState={
item:[],
toAmount:0,
 }

 const cartReducer=(state,action)=>{
   
  if(action.type=="ADD"){
    console.log(state.item.filter((item)=>item.title == action.item.title))
    if(!(state.item.filter((item)=>item.title == action.item.title)).length>0){
    const updateCartItem =  state.item.concat(action.item)
      const updateTotalAmount = state.toAmount + (action.item.price * action.item.amount)
      return {
        item : updateCartItem,
        toAmount : updateTotalAmount
      }
    }else{
      const updatedTotalAmount = state.toAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.item.findIndex((item) => item.title === action.item.title)
        const existingCartItem = state.item[existingCartItemIndex];
        const updatedItem = {...existingCartItem,
            amount: existingCartItem.amount + action.item.amount,};
        let  updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
      return {
        item: updatedItems,
        toAmount: updatedTotalAmount,
      };
    }
  }
  else if(action.type ==='EDIT'){
    const updatedTotalAmount = state.toAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.item.findIndex((item) => item.id === action.item.id)
        const existingCartItem = state.item[existingCartItemIndex];
        const updatedItem = {...existingCartItem,
            amount: existingCartItem.amount + action.item.amount,};
        let  updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
      return {
        item: updatedItems,
        toAmount: updatedTotalAmount,
      };
  }else if(action.type==='REMOVE'){
    const existingCartItemIndex = state.item.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.item[existingCartItemIndex];
    const updatedTotalAmount = state.toAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.item.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.item];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      item: updatedItems,
      toAmount: updatedTotalAmount
    };
  }

 }

const CartContextProvider =(props)=>{
  const inititialToken = localStorage.getItem('token')
  const [state, dispatch] = useReducer(cartReducer,defaultState)
  const [token , setToken] =useState(inititialToken);
  const [toggle , setToggle] = useState(false)

  const userIsLoggedIn = !! token
  const loginHandler=(token)=>{
    setToken(token)
    localStorage.setItem('token',token)

  }

  const logoutHandler=()=>{
    setToken(null)
    localStorage.removeItem('token')
  }
  const toggleHandler=(toggle)=>{
setToggle(!toggle)
  }
  const cartValueContext ={
    item:state.item,
    toAmount:state.toAmount,
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    addCart:((item)=>dispatch({type:"ADD",item:item})),
    removeCart:((id)=>dispatch({type:"REMOVE",id:id})),
    editCart:((item)=>dispatch({type:"EDIT",item:item})),
    toggleHandler: toggleHandler,
    toggle:toggle
    
  }
  return(
    <CartContext.Provider value={cartValueContext}>
      {props.children}
    </CartContext.Provider>
  )
}
export default CartContextProvider