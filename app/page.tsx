import Header from '@/components/Header'
import Hero from '@/components/sections/Hero'
import CredibilityBar from '@/components/sections/CredibilityBar'
import Services from '@/components/sections/Services'
import Industries from '@/components/sections/Industries'
import Process from '@/components/sections/Process'
import CaseStudy from '@/components/sections/CaseStudy'
import WhyUs from '@/components/sections/WhyUs'
import ContactForm from '@/components/sections/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <div id="inicio">
          <Hero />
        </div>
        <CredibilityBar />
        <div id="servicios">
          <Services />
        </div>
        <div id="industrias">
          <Industries />
        </div>
        <div id="proceso">
          <Process />
        </div>
        <div id="casos">
          <CaseStudy />
        </div>
        <div id="nosotros">
          <WhyUs />
        </div>
        <div id="contacto">
          <ContactForm />
        </div>
      </main>
      <Footer />
    </>
  )
}
