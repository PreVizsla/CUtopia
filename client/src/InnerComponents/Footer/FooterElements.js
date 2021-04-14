import styled from 'styled-components'

export const FooterContainer = styled.footer`
    background-color: #292D3E;
`

export const FooterWrapper = styled.div`
    display: flex;
    max-width: 1200px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 48px 24px;

    > img {
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 30px;
        height: auto;
        width: auto;
        max-height: 120px;
        max-width: 250px;
    }
`   

export const FooterLinksContainer = styled.div`
    justify-content: center;
    display: flex;
    @media screen and (max-width: 704px) {
        display:none;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;
`

export const FooterLinks = styled.div`
    align-items: flex-start;
    text-align: left;
    display: flex;
    flex-direction: column;
    margin: 20px 50px;
    color: white;
    width: fit-content;

    > h1 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 16px;
        color: #DDA300;
    }

    > h4 {
        margin-bottom: 0.5rem;
        font-size: 14px;
        font-weight: 500;

        &:hover {
            color: #DDA300;
            transition: 0.3s ease-in-out;
            cursor: pointer;
        }
    }
`

export const FooterAccess = styled.div`
    height: 108px;
    /* background-color:green; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 170px;

    > h1 {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 16px;
        color: white;
    }
`

export const QuestionButton = styled.div`
    display: flex;
    justify-content: space-between;
    color: white;
    background-color: #11ADFF;
    border-radius: 5px;
    width: 100%;
    height: 32px;
    align-items: center;
    padding: 8px 10px;
    margin-bottom: 10px;
    cursor: pointer;
    border: 1px solid #11ADFF;

    > h3 {
        font-weight: 500;
        font-size: 12px
    }

    &:hover {
        color: #11ADFF;
        border-radius: 5px;
        transition: 0.1s ease-in-out;
        background-color: transparent;
    }
`

export const SettingsButton = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid #11ADFF;
    color: #11ADFF;
    border-radius: 5px;
    width: 100%;
    height: 32px;
    align-items: center;
    padding: 8px 10px;
    cursor: pointer;

    > h3 {
        font-weight: 500;
        font-size: 12px
    }

    &:hover {
        border: 1px solid #11ADFF;
        color: white;
        border-radius: 5px;
        transition: 0.1s ease-in-out;
        background-color: #11ADFF;
    }
`
