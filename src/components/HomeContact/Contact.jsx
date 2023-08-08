import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <div className='homeContactContainer'>
        <form>
        <div className="formflex">
        <div className="form-group">
            <label>Name:</label>
            <input type="text" name="name" />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" name="email" />
          </div>
          <div className="form-group">
            <label>Subject:</label>
            <input type="text" name="subject" />
          </div>
          <div className="form-group">
            <label>Phone:</label>
            <input type="tel" name="phone" />
          </div>       
           </div>
          <div className="form-group">
            <label className='comment'>Comment:</label>
            <textarea name="comment"    rows="4"></textarea>
          </div>
          <button type="submit">Submit</button>
              </form>

           
    </div>
  )
}

export default Contact