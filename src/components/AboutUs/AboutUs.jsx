import './AboutUs.css'
const AboutUs = () => {
  return (
      <>
          <div className="aboutUs-container">
          <img  className='aboutTruck' src="assets/truckRight.png" alt="" />
               <div className='aboutUsDescription'>
               <h2>Who We Are</h2>
               <p>Patliputra is a strong SCM leaders and a leading provider of logistics services from India, offering a wide
range of solutions to businesses of all sizes. We specialize in transportation, warehousing, and
fulfillment, and we have a strongest network of facilities that allows us to deliver goods to any
destination in the India. <br /> 
<br />
Our team of experts is dedicated to providing our customers with the highest level of service and end
-to -end supply chain. We understand that logistics is a critical part of your business, and we work hard
to ensure that your goods are delivered on time, in good condition, and at a competitive price.</p>
               <button className='aboutusCta'>
                Get Started
               </button>
                    
               </div>
         
                  </div>
               
      </>
  )
}

export default AboutUs
