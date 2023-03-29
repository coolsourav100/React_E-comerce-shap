import React from 'react';
import classes from './ProductList.module.css'

const ProductList = (props) => {
    console.log(props)
  return (
    <div className="card w-75">
        <div className={classes['hover-zoom']}>
  <img className="w-100" src={props.imageUrl} alt="Card image cap"/>
  </div>
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">{`Price: ₹ ${props.price}`}</p>
    <button  className="btn btn-primary">Add to Cart</button>
  </div>
</div>
  )
}

export default ProductList