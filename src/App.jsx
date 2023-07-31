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
import About from './components/AboutUsPage/About'
import ParticleBG from './components/AboutUs/ParticleBG'

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
      <div className="map-container"
      style={{ position:'relative'}}
      >
      <img src="assets/IndiaMap.jpg" style={{width:'100%', height:'100%'}} alt="" />
      <div className="map-image-container"
      style={{
        position:'absolute',
        width:'300px',
        height:'350px',
        overflow:'hidden',
        border:'2px solid rgb(122, 122, 122)',
        boxShadow:'0px 5px 10px black',
        top:'20vh',
        right:'10vw',
        padding:'20px',
        backgroundColor:'#e4e3ec'

      }}
      >
        <h1>Locations</h1>
        <ul>
          <li>Gurgaon</li>
          <li>Noida</li>
          <li>Delhi</li>
          <li>Mumbai</li>  
        </ul>
      </div>
      </div>
      
     </div>
     <ContactUs/>
     <Footer/>
     <About/>
    
 
   
    </>
  )
}
