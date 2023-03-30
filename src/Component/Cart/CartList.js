import React, { useContext } from 'react'
import CartContext from '../../Store/cart-Context'
import List from './List'

const CartList = (props) => {
    const cartCTX = useContext(CartContext)
    let cartElements = cartCTX.item
  return (
    <div className="container card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            
                        </div>
                    </div>    
                    
                   {cartElements.map((item)=><List id={item.id} amount={item.amount} title={item.title} price={item.price} />)}
                    
                    
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div className="row">
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">{`₹ ${cartCTX.toAmount}`}</div>
                    </div>
                    <button className="btn btn-primary mt-4" >BUY</button>
                </div>
            </div>
            
        </div>
  )
}

export default CartList