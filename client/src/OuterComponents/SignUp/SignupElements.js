import styled from 'styled-components'

export const PasswordField = styled.input.attrs({ 
    type: 'password'
    })`
    width: 100%;
    border: none;       
    padding: 8px 8px;
    border-radius: 8px; 
    margin: 5px 0 5px;
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

export const NameField = styled.input.attrs({ 
    type: 'text'
    })`
    width: 100%;
    border: none;       
    padding: 8px 8px;
    border-radius: 8px; 
    margin: 5px 0 5px;
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

export const EmailField = styled.input.attrs({ 
    type: 'email'
    })`
    width: 100%;
    border: none;       
    padding: 8px 8px;
    border-radius: 8px; 
    margin: 5px 0 5px;
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
    font-size: 15px;
`

export const CheckBox = styled.input`
    margin: 30px 10px 30px 0;

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
export const White = styled.span`
    color:white;

`