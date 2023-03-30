import React from 'react'
import Banner from '../UI/Banner';

const albumData =[
    {date:'JUL16' , location:'DETROIT, MI', vanue :'DTE ENERGY MUSIC THEATRE'},
    {date:'JUL19' , location:'TORONTO,ON', vanue :'BUDWEISER STAGE'},
    {date:'JUL22' , location:'BRISTOW, VA', vanue :'JIGGY LUBE LIVE'},
    {date:'JUL29' , location:'PHOENIX, AZ', vanue :'AK-CHIN PAVILION'},
    {date:'JUL31' , location:'LAS VEGAS, NV', vanue :'T-MOBILE ARENA'},
    {date:'AUG 2' , location:'CONCORD, CA', vanue :'CONCORD PAVILION'},
    {date:'AUG 7' , location:'DETROIT, MI', vanue :'DTE ENERGY MUSIC THEATRE'}
]

const Home = () => {
  return (
    <>
        <Banner>
            <div className='d-flex justify-content-center mt-4'>
            <div className='d-flex justify-content-center border border-info w-25'><h2 className='display-6 '>Get Our Latset Album</h2></div>
            </div>
        </Banner>
        <h2 className='display-3 text-center'>TOURS</h2>
            <div className='container'>
        <table className="table">
  {/* <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead> */}
  <tbody>
    {albumData.map((item)=>{
    return <tr>
      <td scope="row">{item.date}</td>
      <td>{item.location}</td>
      <td>{item.vanue}</td>
      <td><button className='btn btn-info'>BUY TICKETS</button></td>
    </tr>})}
    
  </tbody>
</table>
</div>
      
    </>
  )
}

export default Home