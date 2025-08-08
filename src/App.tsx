import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Process from './components/Process'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div id="top">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <Testimonials />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}