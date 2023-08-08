import { useEffect } from 'react';
import './Whyus.css'
import Accordion from 'react-bootstrap/Accordion';
const Whyus = () => {
 useEffect(()=>{
  const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      console.log('clicked');
        const content = header.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        accordionHeaders.forEach(otherHeader => {
            if (otherHeader !== header) {
                otherHeader.nextElementSibling.style.display = 'none';
            }
            
        });
    });
});
 })

  return (
  <>
  <div className="whyusContainer">
     <img src="BIKE2.png" alt="" />
     <div className="whyusDescription">
        <h3>
            Why Choose Us
        </h3> 
        <div className="accordion">
        <div className="accordion-item">
            <div className="accordion-header">
            <i className="fa-solid fa-arrow-right"></i>
              <h1>PLAN IT</h1>
               
              
              </div>
            <div className="accordion-content">
                <p>This is the content of section 1.</p>
            </div>
        </div>
        <div className="accordion-item">
        <div className="accordion-header">
            <i className="fa-solid fa-arrow-right"></i>
              <h1>RUN IT</h1>
               
              
              </div>
            <div className="accordion-content">
                <p>This is the content of section 2.</p>
            </div>
        </div>
        <div className="accordion-item">
        <div className="accordion-header">
            <i className="fa-solid fa-arrow-right"></i>
              <h1>BUILD IT</h1>
              </div>
            <div className="accordion-content">
                <p>This is the content of section 3.</p>
            </div>
        </div>
    </div>
     </div>
  </div>
  
  
  </>
  )
}

export default Whyus