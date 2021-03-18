import styled from 'styled-components'

export const MenuOption = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: auto;
    margin-bottom: auto;
    height: 80px;
    width: 80px;
    cursor: pointer;

    > h3 {
        color: white;
        font-weight: 500;
        font-size: 12px;
    }

    &:hover {
        background-color: white;
        border-bottom: 3px solid #DDA300;
        transition: 0.2s ease-in-out;

        > h3 {
            color: #DDA300;
            transition: 0.2s ease-in-out;
        }
    }
`

export const IconWrapper = styled.div`
    margin-top: 15px;
    margin-bottom: 3px;
    height: 25px !important;
    width: 25px !important;
    color: #DDA300;
`