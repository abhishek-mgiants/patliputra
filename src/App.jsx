import AnimatedObjects from './components/AnimatedObjects/AnimatedObjects'
import Home from './components/Home/Home'
import Navbar from './components/Navbar'
import OurModel from './components/OurBusinessModel/OurModel'
import Services from './components/Services/Services'

export default function App() {
  return (
    <>
     <Navbar/>
     <Home/>
     <Services/>
     <OurModel/>
    <AnimatedObjects/>
    </>
  )
}
