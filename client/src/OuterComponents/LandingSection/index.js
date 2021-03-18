import React, { useState } from 'react'

import { Button } from '../ButtonElement'
import { ArrowForward, ArrowRight, BtnContainer, LandingContainer, LandingContent, Heading, Paragraph} from './LandingElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        
        <LandingContainer id='home' >
            <LandingContent>
                <Heading>Haven For CUtopians</Heading>
                <Paragraph>
                    Whether you want to be a mentee, a mentor or just a CUtopian, 
                    there's definitely a place for you here at CUtopia!
                </Paragraph>
                <BtnContainer>
                    <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary ='false' dark='true' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </BtnContainer>
            </LandingContent>
        </LandingContainer>
        
    )
}

export default HeroSection
