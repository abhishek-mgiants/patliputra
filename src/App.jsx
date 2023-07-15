import AnimatedObjects from './components/AnimatedObjects/AnimatedObjects'
import Home from './components/Home/Home'
import Navbar from './components/Navbar'
import OurModel from './components/OurBusinessModel/OurModel'
import Services from './components/Services/Services'
import Services2 from './components/Services2/Services2'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
import Clients from './components/Clients/Clients'
import Whyus from './components/WhyUs/Whyus'
import ContactUs from './components/ContactUs/ContactUs'

export default function App() {
  return (
    <>
     {/* <Navbar/> */}
     <Home/>
     <AnimatedObjects/>

     <Clients/>
     <AboutUs/>
     <Services2/>
     <Whyus/>

     <div>
      <img src="https://github.com/abhishek-mgiants/patliputra/blob/master/src/assets/IndiaMap.jpg?raw=true" style={{width:'100%', height:'100%'}} alt="" />
     </div>
     <ContactUs/>
     <Footer/>

 
   
    </>
  )
}
