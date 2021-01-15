import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import AboutBanner from './AboutBanner'
import AboutContent from './AboutContent'
import ListingBanner from './ListingBanner'
import TeamCarousel from './TeamCarousel'

const About = () => {
    return (
        <div>
            <Header color="black" />
            <AboutBanner />
            <AboutContent />
            <ListingBanner />
            <TeamCarousel />
            <Footer />
        </div>
    )
}

export default About
