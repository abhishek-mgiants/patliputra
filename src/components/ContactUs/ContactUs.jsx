import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <div className="header-container">
        <h1>KEEP IN TOUCH WITH US FOR HELP</h1>
      </div>
      <div className="contact-mediums-container">
        <div className="contact-medium">
          <i className="fas fa-home"></i>
          <span>123 Main Street, City, Country</span>
        </div>
        <div className="contact-medium">
          <i className="fas fa-phone"></i>
          <span>+1 (123) 456-7890</span>
        </div>
        <div className="contact-medium">
          <i className="fas fa-envelope"></i>
          <span>info@example.com</span>
        </div>
      </div>
      <div className="contact-form-container">
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
              <div className="map-container">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3585423.439177646!2d72.59872928749995!3d28.648036700000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd698553d5c3%3A0xe6fffd9ca4c0fd3d!2sPatliputra%20Parcel%20Service!5e0!3m2!1sen!2sin!4v1690721872082!5m2!1sen!2sin" width="600" height="450" style={{border:0 }}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
      </div>
     
    </div>
  );
};

export default ContactUs;



