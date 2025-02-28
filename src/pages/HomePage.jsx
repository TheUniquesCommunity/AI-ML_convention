import React from 'react'
import Home from './Home'
import ServicesSection from '../components/taniya1'
import UXProcess from '../components/anamika1'
import IdeaManagement from '../components/anamika2'
import ConsultingSection from '../components/yashi2'
import Hero from '../components/yashi1'
import FeaturesSection from '../components/ksitij'
import TeamMember10 from '../components/speaker'
import AnimatedSupportTeam from '../components/sahil'
import Faq8 from '../components/faq'


const HomePage = () => {
  return (
    <div>
        <Home />
        <ServicesSection />
        <UXProcess />
        <IdeaManagement />
        <Hero />
        <ConsultingSection />

        <FeaturesSection />
        <TeamMember10 />
        <AnimatedSupportTeam />
        <Faq8 />
    </div>
  )
}

export default HomePage