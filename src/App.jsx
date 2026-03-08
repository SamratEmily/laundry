import './index.css'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ServiceZones from './components/ServiceZones'
import Pricing from './components/Pricing'
import ComparisonTable from './components/ComparisonTable'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <ServiceZones />
        <Pricing />
        <ComparisonTable />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}

export default App
