import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'

import './AnimatedObjects.css'
const AnimatedObjects = () => {
  useEffect(()=>{
    AOS.init({duration:1000})
   },[]) 
  return (
   <>
  
   <div data-aos="zoom-in-left"   className="wareHouseLeft">
    <img src="warehouseleftt.png" alt="" />
     <div data-aos="slide-right"  className="leftTruck">
        <img src="T3.png" alt="" />
    </div>
     <div data-aos="slide-left"  className="rightTruck">
        <img src="T 1.png" alt="" />
    </div>
      <div data-aos="slide-left"   data-aos-offset="200" className="manWithBox">
        <img src="Men2.png" alt="" />
    </div>
    <div data-aos="slide-left"   data-aos-offset="200" className="manWithBox">
        <img src="Men1.png" alt="" />
    </div>
     <div data-aos="slide-right" data-aos-offset="200" className='cardBoardBoxes'>
    <img src="assets/cardBoardBoxes.png" alt="" />
   </div>
   </div>
  
   
   
   </>
  )
}

export default AnimatedObjects