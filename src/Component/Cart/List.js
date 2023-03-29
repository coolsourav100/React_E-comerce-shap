import React from 'react'

const List = (props) => {
  return (
    <div className="card row">
    <div className="row main align-items-center">
        
        <div className="col">
            
            <div className="row ms-2">{props.title}</div>
        </div>
        <div className="col">
            <button className='btn btn-outline-dark btn-sm'>-</button><span className="border ms-2">{props.quantity}</span><button className='btn btn-outline-dark ms-2 btn-sm'>+</button>
        </div>
        <div className="col">&euro; {props.price} <span className="close">&#10005;</span></div>
    </div>
</div>
  )
}

export default List