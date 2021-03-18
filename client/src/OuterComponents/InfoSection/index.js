import React from 'react'

import { Button } from '../ButtonElement'
import { ButtonRouter } from '../ButtonRouter'
import { DescriptionSection, InfoContainer, DarkBg, Video, VideoBg, BtnWrap, Column1, Column2, Heading, Img, ImgWrap, InfoWrapper, Description, TextWrapper, Title } from './InfoElements'

const InfoSection = ({Router,Scroller,video, lightBg, id, imgStart, title, lightText, headline, darkText, description, buttonLabel, img, alt, primary, dark, dark2}) => {
    
    return (
        <>
            <InfoContainer video={video} id={id}>
                <VideoBg>
                    <DarkBg>
                        <Video autoPlay loop muted src={video}  type='video/mp4'/>
                    </DarkBg>
                </VideoBg>
        
                <InfoWrapper>
                    {/* <Video_bg autoPlay loop muted src={video}  type='video/mp4'/>
                    <Video_bg video={video}  type='video/mp4'/>
                    */}
                    <DescriptionSection imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <Title>{title}</Title>
                                <Heading lightText={lightText}>{headline}</Heading>
                                <Description darkText={darkText}>{description}</Description>
                                <BtnWrap>
                                    {   Scroller &&
                                        <Button to='signup'
                                        smooth={true}
                                        duration={500}
                                        spy={true}
                                        exact="true"
                                        offset={-80}
                                        primary={primary ? 1 : 0}
                                        dark={dark ? 1 : 0}
                                        dark2={dark2 ? 1 : 0}
                                        >{buttonLabel}</Button>
                                    }
                                    {Router &&
                                        <ButtonRouter to='/signup_signin'>
                                            {buttonLabel}
                                        </ButtonRouter>
                                    }
                                </BtnWrap>
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                {img &&
                                    <Img src={img}  />
                                }
                          
                            </ImgWrap>
                        </Column2>
                    </DescriptionSection>
                </InfoWrapper>  
            </InfoContainer>  
        </>
    )
}

export default InfoSection
