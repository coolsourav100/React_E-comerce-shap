import React ,{useContext} from 'react'
import CartContext from '../../Store/cart-Context'

const List = (props) => {
  const cartCTX = useContext(CartContext)
  const onAddHandler=()=>{
cartCTX.editCart({
  id:props.id,
  name:props.name,
  amount:1,
  price:props.price

})
  }
  const onRemoveHandler=()=>{
    cartCTX.removeCart(
      props.id)
  }
  return (
    <div className="card row">
    <div className="row main align-items-center">
        
        <div className="col">
            
            <div className="row ms-2">{props.title}</div>
        </div>
        <div className="col">
            <button className='btn btn-outline-dark btn-sm' onClick={onRemoveHandler}>-</button><span className="border ms-2">{props.amount}</span><button className='btn btn-outline-dark ms-2 btn-sm' onClick={onAddHandler}>+</button>
        </div>
        <div className="col">{`₹ ${props.price}`}<span>{' x '}</span> <span className="close">{props.amount}</span></div>
    </div>
</div>
  )
}

export default List