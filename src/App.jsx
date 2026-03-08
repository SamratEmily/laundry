import { useEffect } from 'react'
import './index.css'
import { LanguageProvider, useLang } from './context/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import ServiceZones from './components/ServiceZones'
import Pricing from './components/Pricing'
import ComparisonTable from './components/ComparisonTable'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function AppContent() {
  const { lang } = useLang()

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang])

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

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
