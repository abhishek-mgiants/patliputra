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
    <img src="https://github.com/abhishek-mgiants/patliputra/blob/master/src/assets/wareHouseLeft.png?raw=true" alt="" />
     <div data-aos="slide-right"  className="leftTruck">
        <img src="https://github.com/abhishek-mgiants/patliputra/blob/master/src/assets/leftTruck.png?raw=true" alt="" />
    </div>
     <div data-aos="slide-left"  className="rightTruck">
        <img src="https://github.com/abhishek-mgiants/patliputra/blob/master/src/assets/rightTruck.png?raw=true" alt="" />
    </div>
      <div data-aos="slide-left"   data-aos-offset="200" className="manWithBox">
        <img src="https://github.com/abhishek-mgiants/patliputra/blob/master/src/assets/manWithBox.png?raw=true" alt="" />
    </div>
     <div data-aos="slide-right" data-aos-offset="200" className='cardBoardBoxes'>
    <img src="https://github.com/abhishek-mgiants/patliputra/blob/master/src/assets/cardBoardBoxes.png?raw=true" alt="" />
   </div>
   </div>
  
   
   
   </>
  )
}

export default AnimatedObjects