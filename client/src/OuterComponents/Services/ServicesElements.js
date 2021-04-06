import styled from  'styled-components'

export const WholeContainer = styled.div`
    height: 800px;
    z-index=1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    //background: linear-gradient( rgba(0,0,0) 0%, rgba(117,15,109) 100%);
    background: black;
    background-size: cover;
    @media screen and (max-width: 1000px) {
        height: 1100px;
    }

    @media screen and (max-width: 768px) {
        height: 1500px;
    }

  
`

export const VideoBg = styled.div`
    position: absolute;
    right: 0;
    left: 0;
    z-index:2;
    width: 100%;
    
    //match ServicesContainer size;
    height: 800px;
    overflow: hidden;

`

export const Video = styled.video`
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    z-index:3;
`

export const DarkBg = styled.div`
    background:rgba(0,0,0,0.7);
    height:800px;
    z-index:4;
`
//unused for now
export const ContentWrapper = styled.div`
    z-index=99;
`

export const ServicesWrapper = styled.div`

    //location style
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    margin: 0 auto;
    display: grid;
    grid-gap: 36px;

    padding: 0 40px;
    max-width: 1100px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`
    
export const ServicesBox = styled.div`

    //location style
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    
    border-radius: 12px;
    height:360px;
    padding: 40px;

    background: #fff;

    //little glow
    box-shadow: 0px 3px 2px rgba(70, 30, 133,0.4);
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`

export const Heading = styled.h1`
    font-size: 48px;
    color: #fff;
    margin-bottom: 64px;
    text-align: center;
    @media screen and (max-width: 480px) {
        font-size: 36px;
    }
`

export const ServicesTitle= styled.p`
    font-size: 16px;
    font-weight: bold;
    
`

export const Description = styled.p`
    font-size: 16px;
    text-align: center;
    margin-top: 5px;
`
