import styled from 'styled-components'

export const InfoContainer = styled.div`
    color: #fff;
   //z-index:1;
    
`

export const InfoWrapper = styled.div`
    //background: ${({video}) => (video ? 'rgba(0,0,0,0.1)' : '#010606')};
    
    display: grid;
    position:relative;
    justify-content: center;

    z-index: 1;
    height: 860px;
    width: 100%;
    padding: 0 24px;
    
    //max-width: 1100px;
    
    margin-right: auto;
    margin-left: auto;
    
    
    :before {
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        position: absolute;
        //create shadow effect
        background: linear-gradient(to bottom, rgba(0,0,0,1),rgba(0,0,0,0.6));
    }
  
`
//dark background filter
export const DarkBg = styled.div`
    background:rgba(0,0,0,0.7);
    height:860px;
    
    z-index:2;
`

export const VideoBg = styled.div`
    position: absolute;
        //top: 0;
      right: 0;
      //bottom: 0;
      left: 0;
    
    width: 100%;
    height: 860px;
    overflow: hidden;
    
`

export const Video = styled.video`
    //position: absolute;
    
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
    
`
//container that hold the descriptions
export const DescriptionSection = styled.div`
    //position: absolute;
    z-index:5;
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;


    //to change position from text and image
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px) {
        grid-template-areas: ${({imgStart}) => (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
`

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;
`

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
`

export const Title = styled.p`
    color: orange;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const Description = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#010606' : '#fff')};
`

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;
`

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
`
