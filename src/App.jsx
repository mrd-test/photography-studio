import Header from './components/Header'
import Hero from './components/Hero'
import Mission from './components/Mission'
import HowItWorks from './components/HowItWorks'
import Locations from './components/Locations'
import Cities from './components/Cities'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <HowItWorks />
        <Locations />
        <Cities />
        <Contacts />
      </main>
      <Footer />
    </>
  )
}

export default App
