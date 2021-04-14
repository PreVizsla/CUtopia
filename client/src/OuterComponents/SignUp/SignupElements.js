import styled from 'styled-components'

export const Warning = styled.p`
    text-decoration: none;
    color: red;
    font-size: 15px;
`

export const SubmitBtn = styled.button`
    width: 85%;
	padding: 10px 30px;
	cursor: pointer;
	display: block;
	margin: auto;
    margin-top:15px;
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

export const Questions = styled.p`
    font-size:14px;
    margin-top: 5px;
    margin-left: 15%;
    font-weight: bold;
    color: white;
    text-align: left;      
    @media screen and (max-width: 1096px) {
        font-size:12px;
    }
`
export const FormContainer = styled.div`
    position:absolute;
    margin:auto;
    height:380px;
	width: 280px;
    overflow-y:scroll;
	transition: .5s;
    overflow-x: hidden;

    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: #DDA300;
        border-radius: 20px;
    }
`