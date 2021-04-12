import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";

  export const InputField = styled(TextField)`
    width: 100% !important;
    border: none !important;       
    padding: 2px !important;
    margin-bottom: 10px !important;
    margin-top: 5px !important;
    
    &:focus {
        outline: none !important;      
        box-shadow: 0 0 0 2px #FF7F50 !important;
    background-color: 'white' !important;
    }
  `

export const EmailField = styled.input.attrs({ 
    type: 'email'
    })`
    width: 100%;
    border: none;       
    padding: 8px 8px;
    border-radius: 8px; 
    margin-top: 10px;
    margin-bottom: 10px;
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

export const Warning = styled.p`
    text-decoration: none;
    color: red;
    margin-bottom:15px;
`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 12px;
    width:100%;
`
export const SubmitBtn = styled.button`
    width: 85%;
	padding: 10px 30px;
	cursor: pointer;
	display: block;
    margin:auto;
	margin-top:20px;
	background: -webkit-linear-gradient(right, #ff105f, #ffad06);
	background: -moz-linear-gradient(right, #ff105f, #ffad06);
	background: linear-gradient(to right, #ff105f, #ffad06);
	border: 0;
	outline: none;
	border-radius: 30px;
    color:white;

    &:hover {
        transition: all 0.2s ease-in-out;
        color:rgba(117, 15, 109);
        //disabled the hover
        background: #fff;
    }
`


export const NextBtn = styled(LinkR)`
    border-radius: 50px;
    align-items: right;

    //pushing to the left because of container align
    margin-right:160px;

    color: white; //color: #010606;
    font-size: 14px;

    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        
        color: #ff105f;
    }
`

export const LogInBtn = styled(LinkR)`
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
