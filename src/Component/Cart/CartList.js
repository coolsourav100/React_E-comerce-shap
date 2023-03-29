import React from 'react'

const CartList = () => {
  return (
    <div className="container card">
            <div className="row">
                <div className="col-md-8 cart">
                    <div className="title">
                        <div className="row">
                            <div className="col"><h4><b>Shopping Cart</b></h4></div>
                            <div className="col align-self-center text-right text-muted">3 items</div>
                        </div>
                    </div>    
                    
                    <div className="row">
                        <div className="row main align-items-center">
                            
                            <div className="col">
                                
                                <div className="row ms-2">Cotton T-shirt</div>
                            </div>
                            <div className="col">
                                <a href="#">-</a><a href="#" className="border">1</a><a href="#">+</a>
                            </div>
                            <div className="col">&euro; 44.00 <span className="close">&#10005;</span></div>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="col-md-4 summary">
                    <div><h5><b>Summary</b></h5></div>
                    <hr/>
                    <div className="row">
                        <div className="col">TOTAL PRICE</div>
                        <div className="col text-right">&euro; 137.00</div>
                    </div>
                    <button className="btn btn-primary mt-4">CHECKOUT</button>
                </div>
            </div>
            
        </div>
  )
}

export default CartList