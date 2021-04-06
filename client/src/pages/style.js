import styled from 'styled-components'

export const Buttons = styled.div`
    width: 220px;
    margin: 35px auto;
    position: relative;
    box-shadow: 0 0 20px 9px #DDA300;
    border-radius: 30px;
`

export const ContainerBox = styled.div`
    width: 380px;
    height: 530px;
    margin: auto;
    position: relative;
    background: rgba(117, 15, 109, 0.9);
    padding: 5px;
    overflow: hidden;
`

export const BigContainerBox=styled.div`
width: 40%;
height: 640px;
margin: auto;
position: relative;
background: rgba(117, 15, 109, 0.9);
padding: 5px;
overflow: hidden;
@media screen and (max-width: 1300px) {
    width: 520px;
    height: 640px;
}
//retaining 90% width
@media screen and (max-width: 577px) {
    width: 90%;
    height: 640px;
}

`

//just a div with color to create a button illusion
export const Slider = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    width: 110px;
    height: 100%;	
    background: -webkit-linear-gradient(right, #ff105f, #ffad06);
    background: -moz-linear-gradient(right, #ff105f, #ffad06);
    background: linear-gradient(to right, #ff105f, #ffad06);
    border-radius: 30px;
    transition: .5s;
`


export const Toggle = styled.button`
    color:white;
    padding: 10px 30px;
    cursor: pointer;
    background: transparent;
    border: 0;
    outline: none;
    position: relative;
`

export const CUtopia = styled.div`
    margin-top: 0px;
`
