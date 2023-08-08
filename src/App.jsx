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
import { Routes,Route, Link } from 'react-router-dom'
import Contact from './components/HomeContact/Contact'

export default function App() {
  return (
    <>
    <nav>
      <ul>
        <li> <Link to="/patliputra">Home</Link> </li>
        <li>  <Link to="/patliputra/about">About</Link> </li>
      </ul>
    </nav>
     <Routes>
      <Route path='/patliputra' element={<Home/>}/>
      <Route path='/patliputra/about' element={<About/>}/>
     </Routes>
    </>
  )
}
