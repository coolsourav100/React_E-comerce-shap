import React from 'react'
import Modal from '../Modal/Modal'
import CartList from './CartList'


const Cart = (props) => {
  return (
    <Modal onHide={props.onHide}>
        
{<CartList />}
    </Modal>
  )
}

export default Cart