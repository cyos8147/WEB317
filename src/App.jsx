
//Conponents
import Nav from './components/nav'
import Hero from './components/hero'
import HeroSection from './components/section'
import Footer from './components/footer'
import { ScrollRestoration } from 'react-router-dom';


function App() {

  return (
    <>
      <Nav/>
      <Hero/>
      <HeroSection/>
      <Footer/>
      <ScrollRestoration/>

    </>
  )
}

export default App
