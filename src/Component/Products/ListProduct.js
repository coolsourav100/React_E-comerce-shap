import React, { useContext } from 'react'
import CartContext from '../../Store/cart-Context'
import ProductList from '../UI/ProductList';
import { Link } from 'react-router-dom';
 let productsArr = [
    {
    id:1,
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
    id:2,
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    id:3,
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    id:4,
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ]
const ListProduct = () => {
// const cartCTX = useContext(CartContext)
// let productsArr = cartCTX.item
  return (
    <div className='d-flex justify-content-center'>
        
    <div className='row' >
    {productsArr.map((item)=>{
return (<li className='col-6'><Link to={`${item.id}`}><ProductList title={item.title} price={item.price} imageUrl={item.imageUrl}/></Link></li>)
    })}
</div>
</div>
  )
}

export default ListProduct