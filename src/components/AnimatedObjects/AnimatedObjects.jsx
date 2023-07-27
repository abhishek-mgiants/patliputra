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
    <img src="assets/wareHouseLeft.png" alt="" />
     <div data-aos="slide-right"  className="leftTruck">
        <img src="assets/leftTruck.png" alt="" />
    </div>
     <div data-aos="slide-left"  className="rightTruck">
        <img src="assets/rightTruck.png" alt="" />
    </div>
      <div data-aos="slide-left"   data-aos-offset="200" className="manWithBox">
        <img src="assets/manWithBox.png" alt="" />
    </div>
     <div data-aos="slide-right" data-aos-offset="200" className='cardBoardBoxes'>
    <img src="assets/cardBoardBoxes.png" alt="" />
   </div>
   </div>
  
   
   
   </>
  )
}

export default AnimatedObjects