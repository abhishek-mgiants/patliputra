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
import { BrowserRouter, HashRouter, Route,Routes } from 'react-router-dom'
import Contact from './components/HomeContact/Contact'

export default function App() {
  return (
   <>
    <HashRouter>
             
        <Routes>
        <Route exact path='' element={ <div> <h1>Hello</h1> </div> } />
        <Route path='/about' element={  <div>About</div> }/>
        </Routes>
        <a href="/">Home</a>
        <a href="patliputra/#/about">About</a>
    </HashRouter>
   </>
  )
}
