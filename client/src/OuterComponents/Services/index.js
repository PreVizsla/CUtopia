
import React from 'react'

import Video_call from '../../assets/images/Video_call.svg'
import Chat from '../../assets/images/Chat.svg'
import codes from '../../assets/images/codes.svg'
//import video from '../../videos/subtle_star.mp4'

import { ContentWrapper, Heading, ServicesBox, WholeContainer, ServicesWrapper, ServicesTitle, ServicesIcon, Description  } from './ServicesElements'

const Services = () => {
    return (
        <div >
            <WholeContainer id="services" >
                 {/* <VideoBg>
                    <DarkBg>
                    <Video autoPlay loop muted src={video}/>
                    </DarkBg> 
                </VideoBg>  */}
                    
                <ContentWrapper>
                    <Heading>Our Services</Heading>
                    {/* container to wrap all of our services */}
                    <ServicesWrapper>
                        {/* each services */}
                        <ServicesBox>
                            {/* share ideas and opportunity */}
                            <ServicesIcon src={Video_call} />
                            <ServicesTitle>Share Ideas and </ServicesTitle>
                            <ServicesTitle>Opportunities</ServicesTitle>
                            <Description>CUtopia provides a place where ideas, jobs, and events can easily be shared among each other</Description>
                        </ServicesBox>
                        <ServicesBox>
                            <ServicesIcon src={Chat} />
                            <ServicesTitle>End to End Encrypted </ServicesTitle>
                            <ServicesTitle>Video Call and Messaging </ServicesTitle>
                            <Description>Feel safe chatting and calling with other fellow CUtopians through our secure platform</Description>
                        </ServicesBox>
                        <ServicesBox>
                            <ServicesIcon src={codes} />
                            <ServicesTitle>Smart Mentor</ServicesTitle> 
                            <ServicesTitle>Recommendation</ServicesTitle>
                            <Description>We help you find mentors who are willing to guide you in your adventure here in CU and beyond! </Description>
                        </ServicesBox>
                 
                    </ServicesWrapper>
                </ContentWrapper>  
            </WholeContainer>
        </div>
    )
}

export default Services
