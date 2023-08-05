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
import { BrowserRouter, Route,Routes } from 'react-router-dom'

export default function App() {
  return (
   <BrowserRouter basename='/patliputra'>
   <Routes>

    <Route exact path='/patliputra' element={<div>  <h1>Home page</h1> </div>}/>
    <Route path='/patliputra/about' element={<div>  <h1>About page</h1> </div>}   />
    <Route path='/patliputra/contact' element={<div>  <h1>contact page page</h1> </div>}/>

   </Routes>
   
   
   </BrowserRouter>
  )
}
