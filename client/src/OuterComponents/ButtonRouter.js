import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'

export const ButtonRouter = styled(LinkR)`
    border-radius: 50px;
    //background: #01bf71;
    background: rgba(235, 152, 52);
    //background: linear-gradient(to right, #ff105f, #ffad06);
    white-space: nowrap;
    padding: 10px 22px;
    
    color: white; //color: #010606;
    font-size: 16px;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: rgba(117, 15, 109);
    }
`
