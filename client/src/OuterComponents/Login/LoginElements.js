
import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'

export const Warning = styled.p`
    text-decoration: none;
    color: red;
    margin-bottom:15px;
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
