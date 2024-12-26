import React from 'react'
import GrowthPartner from '../components/GrowthPartner';
import CompetitiveAnalysis from '../components/CompetitiveAnalysis';
import Featured from '../components/Featured';
import Hero from '../components/Hero';
import Marketing from '../components/Marketing';
import SatisfiedClients from '../components/SatisfiedClients';
import ActualResults from '../components/ActualResults';

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
        </div>
    )
}

export default Home