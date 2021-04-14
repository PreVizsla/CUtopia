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