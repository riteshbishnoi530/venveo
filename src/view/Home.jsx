import React from 'react'
import GrowthPartner from '../components/GrowthPartner';
import CompetitiveAnalysis from '../components/CompetitiveAnalysis';
import Featured from '../components/Featured';
import Hero from '../components/Hero';
import Marketing from '../components/Marketing';
import SatisfiedClients from '../components/SatisfiedClients';
import ActualResults from '../components/ActualResults';
import LearnFrom from '../components/LearnFrom';
import ThreeCards from '../components/ThreeCards';
import Goals from '../components/Goals';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <Hero />
            <Featured />
            <SatisfiedClients />
            <Marketing />
            <CompetitiveAnalysis />
            <GrowthPartner />
            <ActualResults />
            <LearnFrom/>
            <ThreeCards/>
            <Goals/>
            <Footer/>
        </div>
    )
}

export default Home