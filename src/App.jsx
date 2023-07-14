import AnimatedObjects from './components/AnimatedObjects/AnimatedObjects'
import Home from './components/Home/Home'
import Navbar from './components/Navbar'
import OurModel from './components/OurBusinessModel/OurModel'
import Services from './components/Services/Services'
import Services2 from './components/Services2/Services2'
import AboutUs from './components/AboutUs/AboutUs'
import Footer from './components/Footer/Footer'
import Clients from './components/Clients/Clients'

export default function App() {
  return (
    <>
     {/* <Navbar/> */}
     <Home/>
     <AnimatedObjects/>

     <Clients/>
     <AboutUs/>
     <Services2/>

     
     <Footer/>

 
   
    </>
  )
}
