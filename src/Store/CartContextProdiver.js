import { useReducer } from "react"
import CartContext from "./cart-Context"
 const defaultState={
item:[],
toAmount:0,

 }

 const cartReducer=(state,action)=>{
   
  if(action.type=="ADD"){
    const updateStateItem = state.item.concat(action.item)
    const updateSataetoAmount = state.toAmount + (action.item.price * action.item.amount)
    return{
      item : updateStateItem,
      toAmount: updateSataetoAmount,
    }
  }

 }

const CartContextProvider =()=>{
  const [state, dispatch] = useReducer(cartReducer,defaultState)
  const cartValueContext ={
    item:state.item,
    toAmount:state.toAmount,
    addCart:((item)=>dispatch({type:"ADD",item:item})),
    removeCart:((id)=>dispatch({type:"REMOVE",id:id}))
  }
  return(
    <CartContext.Provider value={cartValueContext}>
    </CartContext.Provider>
  )
}
export default CartContextProvider