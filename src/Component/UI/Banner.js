import React from 'react'

const Banner = (props) => {
  return (
    <div className='container mw-100 p-5 bg-secondary'>
        <h1 className='text-white text-center display-2'>The Generics</h1>
        {props.children}
    </div>
  )
}

export default Banner