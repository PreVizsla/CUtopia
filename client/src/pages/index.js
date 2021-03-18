import React, { useState } from 'react'

import Footer from '../OuterComponents/Footer'
import InfoSection from '../OuterComponents/InfoSection'
import { AboutUsInfo, SignUpInfo } from '../OuterComponents/InfoSection/data'
import LandingSection from '../OuterComponents/LandingSection'
import Navbar from '../OuterComponents/Navbar'
import Services from '../OuterComponents/Services'
import Sidebar from '../OuterComponents/Sidebar'

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <LandingSection />
            <InfoSection {...AboutUsInfo} />
            <Services />
            <InfoSection {...SignUpInfo} />
            <Footer />
        </>
    )
}

export default Home