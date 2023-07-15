import './Services2.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Services2 = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
   },[]) 
  const servicesData = [{ id:1, name: 'Supply Chain Execution', imgPath: 'https://github.com/abhishek-mgiants/patliputra/blob/master/src/assets/leftTruck.png?raw=true', dscrpstn: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt' },
    {id:2, name: 'Supply Chain Advisory', imgPath: 'https://github.com/abhishek-mgiants/patliputra/blob/master/src/assets/leftTruck.png?raw=true', dscrpstn: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt' },
    { id:3,name: 'Distribution Network Management', imgPath: 'https://github.com/abhishek-mgiants/patliputra/blob/master/src/assets/leftTruck.png?raw=true', dscrpstn: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt' },
    { id:4,name: 'Supplier & Inventory Management', imgPath: 'https://github.com/abhishek-mgiants/patliputra/blob/master/src/assets/leftTruck.png?raw=true', dscrpstn: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt' },
    {id:5, name: 'Transportation Services', imgPath: 'https://github.com/abhishek-mgiants/patliputra/blob/master/src/assets/leftTruck.png?raw=true', dscrpstn: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt' },
    { id:5,name: 'Last Mile Delivery', imgPath: 'https://github.com/abhishek-mgiants/patliputra/blob/master/src/assets/leftTruck.png?raw=true', dscrpstn: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis nesciunt' },
   ]
 
  return (
    <>
    <div className='services-upperSection'>
      <h1>Services</h1>
    <div className='servcies-card-container'>
      {
        servicesData.slice(0,3).map((service) => (
          <div key={service.id}
              data-aos='zoom-in'
          className="image-container"
        >
          <img
              src={service.imgPath}
            alt="Unsplash Image"
            className="image1"
          />
            <img
              src={service.imgPath}
            alt="Unsplash Image"
            className="image2"
            />
            <div className="service-description">
              <div className="service-heading">
                {service.name}
              </div>
              <div className="service-cta">
                <button><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                </svg>
                 </button>
              </div>
            </div>
         
          </div>
        ))
      }
    </div>
    </div>
    <div className='services-lowerSection'>
    <div className='servcies-card-container'>
      {
        servicesData.slice(3,6).map((service) => (
          <div key={service.id}
              data-aos='zoom-in'
          className="image-container"
        >
          <img
              src={service.imgPath}
            alt="Unsplash Image"
            className="image1"
          />
            <img
              src={service.imgPath}
            alt="Unsplash Image"
            className="image2"
            />
            <div className="service-description">
              <div className="service-heading">
                {service.name}
              </div>
              <div className="service-cta">
                <button><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-arrow-down" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"/>
                </svg>
                 </button>
              </div>
            </div>
         
          </div>
        ))
      }
    </div>
    </div>
    
    
    </>
  )
}

export default Services2
