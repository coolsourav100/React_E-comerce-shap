import React from 'react'
import ProductList from '../UI/ProductList'
 let productsArr = [
    {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    },
    {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    },
    {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    },
    {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
    }
    ]
const ListProduct = () => {

  return (
    <div className='d-flex justify-content-center'>
        
    <div className='row' >
    {productsArr.map((item)=>{
return (<li className='col-6'><ProductList title={item.title} price={item.price} imageUrl={item.imageUrl}/></li>)
    })}
</div>
</div>
  )
}

export default ListProduct