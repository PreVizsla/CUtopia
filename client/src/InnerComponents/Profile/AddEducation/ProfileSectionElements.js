import { Avatar } from '@material-ui/core'
import styled from 'styled-components'
import profileBackground from '../../../assets/images/profileBG.jpg'

export const MainProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    background-color: white;
    height: fit-content;
    border-radius: 10px 10px 5px 5px;
    margin-bottom: 30px;
`

export const ProfileBackground = styled.div`
    background-image: url(${profileBackground});
    background-size: 100%;
    background-position: center; 
    width: 100%;
    height: 130px;
    object-fit: cover;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    //margin-bottom: -45px;
`
export const InformationContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    //background-color: green;
    justify-content: space-between;
    width:100%
    //height: fit-content;
`

export const EditInfoContainer = styled.div`
    display:flex;
    flex-direction: column;
    align-items: left;
    //background-color: red;
    padding: 25px;
    margin-top:-30px;
`

export const ProfileIcon = styled(Avatar)`
    
    margin-bottom: 25px;
    margin-top: -15px;
    margin-left: 25px;
    height: 150px !important;
    width: 150px !important;
    box-shadow: 0px 0px 0px 7px #fff;
`


export const ProfileIconForm = styled(Avatar)`
    
    margin-bottom: 25px;
    margin-top: -55px;
    margin-left: 25px;
    height: 150px !important;
    width: 150px !important;
    box-shadow: 0px 0px 0px 7px #fff;
`
export const ProfileInfo = styled.div`
    width:40%;
    margin-top: 5px;
    margin-bottom: 25px;
    text-align: left;
    //background-color: red;
    > h2 {
        margin-top:15px;
        margin-bottom:15px;
        max-width: 100%;
        font-weight: 700;
        font-size: 16px;
    }

    > h4 {
        max-width: 100%;
        font-weight: 500;
        font-size: 14px;
    }

    @media screen and (max-width: 1040px) {
        width: 55%;
        margin-left:20px;
    }
    
`
export const CountryInfo = styled.div`
    width:215px;
    margin-top: 5px;
    margin-bottom: 25px;
    text-align: right;
    //background-color: red;
    > h4 {
        margin: 15px 15px 15px 15px;
        max-width: 100%;
        font-weight: 500;
        font-size: 12px;
    }
`
export const ContactButton = styled.button`
    width: 45%;
    align-items: left;
    margin-top:15px;
    background-color: #DDA300;
    color: white;
    cursor: pointer;
    border: none;
    border-radius: 4px;
    height: 32px;
    font-size: 12px;
    font-weight: 500;

    &:hover {
        background-color: white;
        color: #DDA300;
        transition: 0.1s ease-in-out;
        border: 2px solid #DDA300;
        outline:none
    }
`

export const CloseBtn = styled.button`
    border:none;
    background-color: white;
    cursor: pointer;
    &:hover {
        color: grey;
        transition: 0.1s ease-in-out;
        outline:none;
    }
    &:active{
        outline:none;
        border:none;
    }
`

export const IconContainers = styled.div`
    display: flex;
    flex-direction: row;
    align-items: left;
    //background-color: green;
    justify-content: space-between;
    width:100%
    //height: fit-content;
`

export const UploadButton = styled.button`
    margin:15px 15px;
    color: rgba(0,0,0,0.4);
    border-radius: 4px;
    border: none;
    cursor: pointer;
    background-color:rgba(255,255,255,.3);
    &:hover {
        background-color: white;
        color:black;
        transition: 0.1s ease-in-out;
`
export const EditButton = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin:15px 15px;
    width:fit-content;
    color: rgba(0,0,0,0.6);
    border-radius: 4px;
    border: none;
    cursor: pointer;
    outline:none;
    background-color:rgba(255,255,255,.3);
    &:hover {
        outline:none;
        background-color: white;
        color:black;
        transition: 0.1s ease-in-out;   
 
    
`

export const EditButtonText = styled.p`
    font-size:15px;
    margin-left:10px;
    margin-right:10px;

`
export const FormContainer = styled.div`
    //following linkedIn Style
    width: 700px;

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


export const SaveBtn = styled.button`
width: 25%;
padding: 10px 30px;
cursor: pointer;
display: block;
margin:auto;
margin-top:20px;
//background: -webkit-linear-gradient(right, #ff105f, #ffad06);
//background: -moz-linear-gradient(right, #ff105f, #ffad06);
//background: linear-gradient(to right, #ff105f, #ffad06);

font-size: 16px;
font-weight: 500;
background:#DDA300;
border: 0;
outline: none;
border-radius: 10px;
color:white;
&:hover {
    background-color: white;
    color: #DDA300;
    transition: 0.1s ease-in-out;
    border: 1px solid #DDA300;
    outline:none
}
`