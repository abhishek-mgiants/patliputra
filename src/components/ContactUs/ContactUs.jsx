import React from 'react'
import './ContactUs.css'
const ContactUs = () => {
  return (
    <div>
        <div className="flodesk-container">
        <hr/>
  <h1 className="flodesk-heading">Patliputra</h1>
  <h2>Contact Us</h2>
  <div className="input-container">
  <input type="text" placeholder='Name'/>
  </div>
  <div className="input-container">
    
    <input type="email" placeholder="Enter your email"/>
  </div>
  
  <div className="input-container">
      <textarea name="mesage"  cols="30" rows="4"></textarea>   
  </div>
  
  <button className="login-button">Submit</button>
  
 
 
</div>
    </div>
  )
}

export default ContactUs