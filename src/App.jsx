import './App.css'
import About from './Components/About'
import Available from './Components/Available'
import Client from './Components/Client'
import Contact from './Components/Contact'
import Faq from './Components/Faq'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Mainfeature from './Components/Mainfeature'
import Meeting from './Components/Meeting'
import Navbar from './Components/Navbar'

function App() {

  return (
   <>
    <Navbar/>
    <Hero/>
    <Mainfeature/>
    <Available/>
    <About/>
    <Meeting/>
    <Faq/>
    <Client/>
    <Contact/>
    <Footer/>
   </>
  )
}

export default App
