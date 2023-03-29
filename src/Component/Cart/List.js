import React from 'react'

const List = (props) => {
  return (
    <div className="row">
    <div className="row main align-items-center">
        
        <div className="col">
            
            <div className="row ms-2">{props.title}</div>
        </div>
        <div className="col">
            <a href="#">-</a><a href="#" className="border">{props.quantity}</a><a href="#">+</a>
        </div>
        <div className="col">&euro; {props.price} <span className="close">&#10005;</span></div>
    </div>
</div>
  )
}

export default List