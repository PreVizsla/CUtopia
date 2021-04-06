import { Link as LinkR } from 'react-router-dom'
import styled from 'styled-components'

export const EmailField = styled.input.attrs({ 
    type: 'email',
    })`
    width: 100%;
    border: none;       
    padding: 8px 8px;
    border-radius: 8px; 
    margin: 30px 0 0 0;
    border-left: 0;
    border-right: 0;
    border-top: 0;
    border-bottom: 1px solid #999;
    outline: none;
    &:focus {
        outline: none;      
        box-shadow: 0 0 0 2px #FF7F50;
        background-color: 'white';
    }
`

export const Heading = styled.h1`
    margin-top: 18px;
    font-weight: bold;
    color: white;
    text-align: center;
    margin-bottom: 10px;
`

export const Content = styled.p`
    font-size:16px;
    margin-top: 5px;
    font-weight: bold;
    color: white;
    text-align: center;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height:300px;
    padding: 40px;
`

export const Warning = styled.p`
    text-decoration: none;
    color: red;
    font-size: 15px;
    margin-top:5px;
`
export const BtnWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 12px;
    margin-top: 30px;
    height:10px;
`

export const SubmitBtn = styled.button`
    border-radius: 50px;
    align-items: center;
    background: linear-gradient(to right, #ff105f, #ffad06);

    padding: 10px 30px;

    color: white; //color: #010606;
    font-size: 16px;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-top: 20px;
    &:hover {
        transition: all 0.2s ease-in-out;
        color:rgba(117, 15, 109);
        //disabled the hover
        background: #fff;
    }
`
export const NextBtn = styled(LinkR)`    
    border-radius: 50px;
    align-items: ;
    background: linear-gradient(to right, #ff105f, #ffad06);

    padding: 10px 30px;
    left:0;
    color: white; //color: #010606;
    font-size: 16px;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-top: 20px;
    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: rgba(117, 15, 109);
    }
`

//for button router experiment
export const Submit_btn = styled.button`
    border-radius: 50px;
    align-items: center;
    background: linear-gradient(to right, #ff105f, #ffad06);

    padding: 10px 30px;

    color: white; //color: #010606;
    font-size: 16px;
    text-decoration: none;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    margin-top: 20px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: rgba(117, 15, 109);
    }
`




//for button router experiment
export const Link_text = styled(LinkR)`
    text-decoration:none;
    color:white;
    &:hover {
        transition: all 0.2s ease-in-out;
        
        color: rgba(117, 15, 109);
    }

`
