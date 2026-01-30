import { useContext, useEffect } from 'react'
import Hero from '../components/Hero'
import Navcomponent from '../components/Navcomponent'
import FeaturesSection from '../components/FeaturesSection'
import HowItWorks from '../components/HowItWorks'
import ClientsSection from '../components/ClientsSection'
import { StaggerTestimonials } from '../components/ui/Testimonial'
import Footer from '../components/Footer'
import ScrollAnimation from '../components/ui/ScrollAnimation'

const Home = () => {


  return (<>

    <Navcomponent />
    <main className='relative overflow-hidden'>
      <Hero />
      <FeaturesSection />
      <HowItWorks />
      <ClientsSection />
      <ScrollAnimation animation="fade-up">
        <StaggerTestimonials />
      </ScrollAnimation>
    </main>
    <ScrollAnimation animation="fade-in">
      <Footer />
    </ScrollAnimation>
  </>
  )
}

export default Home
