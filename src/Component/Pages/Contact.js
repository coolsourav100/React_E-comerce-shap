import React ,{useState} from 'react'
import { json } from 'react-router-dom'
import Banner from '../UI/Banner'
import Footer from '../Footer/Footer'

const Contact = () => {
  const [contactData , setContactData] = useState({
    firstName:'',
    lastName:'',
    address:'',
    email:'',
    city:'',
    state:'',
    pin:''
  })

  const changeHandler=(e)=>{
setContactData({
  ...contactData,[e.target.name]:e.target.value , id:Math.random()
})
  }
  const submitHandler=async(e)=>{
    e.preventDefault();
    // console.log(contactData)
    try{
    const responce = await fetch('https://shapecom-ff571-default-rtdb.asia-southeast1.firebasedatabase.app/generics/contactus.json',{
      method:'POST',
      body : JSON.stringify(contactData),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const data = responce.json()
    console.log(responce.statusText)
  }catch(err){
console.log(err)
  }
  setContactData({
    firstName:'',
    lastName:'',
    address:'',
    email:'',
    city:'',
    state:'',
    pin:''
  })
  }
  return (
    <div>
      <Banner><h2 className='text-center display-6  '>Contact Us</h2></Banner>
      <div className='container h-100 d-flex'>
 <div>
  <h2>Talk with our team</h2>
  <p>Fill out your information and an Our representative will reach out to you. Have a simple question? Check out our FAQ.</p>
 </div>
 <div className='container border mt-4 my-4'>
 <form className='mw-100 mh-100' onSubmit={submitHandler}>
  <div className="row">
    <div className="col-md-6">
      <label className='form form-label'>First Name</label>
      <input type="text" className="form-control" value={contactData.firstName} name='firstName' onChange={changeHandler}/>
    </div>
    <div className="col-md-6">
      <label className='form form-label' >Last Name</label>
      <input type="text" className="form-control" value={contactData.lastName} name='lastName' onChange={changeHandler}/>
    </div>
  </div>
  <div className="form-group">
    <label className='form form-label'>Address</label>
    <input type="text" className="form-control" value={contactData.address} name='address' onChange={changeHandler}/>
  </div>
  <div className="form-group">
    <label className='form form-label' >Email</label>
    <input type="email" className="form-control" value={contactData.email} name='email' onChange={changeHandler}/>
  </div>
  <div className="row">
    <div className="col-md-4">
      <label className='form form-label' >City</label>
      <input type="text" className="form-control" value={contactData.city} name='city' onChange={changeHandler}/>
    </div>
    <div className="col-md-4">
      <label className='form form-label'>State</label>
      <input type='text' className='form form-control'value={contactData.state} name='state' onChange={changeHandler}/>
    </div>
    <div className="col-md-4">
      <label className='form form-label'>Pin</label>
      <input type="text" className="form-control" value={contactData.pin} name='pin' onChange={changeHandler}/>
    </div>
  </div>
  <div className="form-group mt-2">
    <div className="form-check">
      <input className="form-check-input" type="checkbox" id="gridCheck"/>
      <label className="form-check-label" for="gridCheck">
      By checking the box and clicking "Submit", you are agreeing to our Privacy Statement.
      </label>
    </div>
  </div>
  <button type="submit" className="btn btn-primary mt-2">Submit</button>
  <p className='mt-4'>our representative will reach you soon...</p>
</form>
 </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Contact