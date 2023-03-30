import React, { useContext } from 'react';
// import CartContext from '../../Store/cart-Context';
import classes from './ProductList.module.css';
import CartContext from '../../Store/cart-Context'

const ProductList = (props) => {
  const cartCTX = useContext(CartContext)
  let {title , price} = props
  const clickHandler=()=>{
    
     cartCTX.addCart({
      id:Math.random(),
      title:title,
      price:price,
      amount:1
     })

    }
    
  return (
    <div className="card w-75">
        <div className={classes['hover-zoom']}>
  <img className="w-100" src={props.imageUrl} alt="Card image cap"/>
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{`Price: ₹ ${props.price}`}</p>
    <button  className="btn btn-primary" onClick={clickHandler}>Add to Cart</button>
  </div>
</div>
  )
}

export default ProductList