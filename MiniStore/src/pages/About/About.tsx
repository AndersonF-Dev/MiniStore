// import React from 'react'
import aboutFeatures from '../../data/AboutFeaturesData';
import Features from '../../components/Features/Features';
import Testimonials from '../../components/Testimonials/Testimonials';
import Newsletter from '../../components/Newsletter/Newsletter';
import InstagramFeed from '../../components/InstagramFeed/InstagramFeed';
import AboutUs from '../../components/AboutUs/AboutUs';
import PageHeader from '../../components/PageHeader/PageHeader';
 
import { 
    Conteiner
} from './styleAbout'
const About = () => {
  return (
      <Conteiner>
        <PageHeader pageName="Sobre" pagePath="/about" />
        <Features items={aboutFeatures} />
        <AboutUs />
        <Testimonials />
        <Newsletter />
        <InstagramFeed />
    </Conteiner>
  )
}

export default About