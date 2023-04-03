import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../Store/cart-Context'
import List from './List'

const CartList = (props) => {
    const cartCTX = useContext(CartContext)
    const [cartElements , setCartElemets] = useState([]);
    const email =localStorage.getItem('email').replace(/[@,.]/g,'-')
    let toggle = cartCTX.toggle
    let price = 0
    useEffect(()=>{
         fetch(`https://crudcrud.com/api/2ccae130c81c463eb862a2141cd4697c/cart${email}`)
        .then((res)=>res.json())
        .then((res)=>setCartElemets(res))
        .catch((err)=>console.log(err))
    },[toggle])
    console.log(cartElements,'cartElement')
  return (
    <div className="container card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            
                        </div>
                    </div>    
                    
                   {cartElements.map((item)=>
                   {
                    price +=item.price;

                   return (
                   <List id={item.id} amount={item.amount} title={item.title} price={item.price} />)})}
                    
                    
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div className="row">
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">{`₹ ${price}`}</div>
                    </div>
                    <button className="btn btn-primary mt-4" >BUY</button>
                </div>
            </div>
            
        </div>
  )
}

export default CartList