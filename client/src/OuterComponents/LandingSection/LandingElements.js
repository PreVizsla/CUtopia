import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'
import styled from 'styled-components'
import HTML_background from "../../assets/images/bg.jpg"

export const LandingContainer = styled.div`
    //background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    
    //pake bg html
    background-image: url(${HTML_background});
    background-size: cover;
    background-position: center;   

    :before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        //create shadow effect
        background: linear-gradient(rgba(0,0,0,0.3) 0%, rgba(0,0,0,1) 100%);
    }
`

//not used for now (experiment)
export const Bg = styled.div`
    background-image: url(${HTML_background});
    background-size: cover;
    background-position: center;
`

export const LandingContent = styled.div`

    //position style
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 1200px;
    padding: 8px 24px;
`

export const Heading = styled.h1`
    color: #fff;
    font-size: 60px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 60px;
    }

    @media screen and (max-width: 480px) {
        font-size: 48px;
    }
`

export const Paragraph = styled.p`
    margin-top: 24px;
    text-align: center;
    max-width: 600px;

    color: #fff;
    font-size: 24px;
    

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const BtnContainer = styled.div`
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
` 