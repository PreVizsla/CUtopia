import styled from 'styled-components'
import VideocamIcon from '@material-ui/icons/Videocam';
import SendIcon from '@material-ui/icons/Send';


export const ChatScreenWrapper = styled.div`
    display: flex;
    flex: 0.73;
    border-radius: 4px;
    height: fit-content;
    width: 100%;
`

export const Screen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: 591px;
    border-radius: 10px 10px 5px 5px;
    width: 100%;
    justify-content: space-between;
`

export const ChatScreenHeader = styled.div`
    width: 100%;
    display: flex;
    padding: 0px 20px;
    border-bottom: 2px solid #f3f2ef;
    justify-content: space-between;
    height: 60px;
    align-items: center;
`

export const SubheadingWrapper = styled.div`
    display: flex;
    width: 100%;
    /* background-color: blue; */
    justify-content: center;
    border-bottom: 1px solid lightgray;
    height: 7px;
    margin-top: 8px;
    margin-bottom: 2px;
`

export const SubheadingText = styled.div`
    width: 200px;
    display: flex;
    justify-content: center;
    background-color: white;
    margin-bottom: -5px;

    > h3 {
        display: flex;
        font-size: 12px;
        color: grey;
        font-weight: 400;

        & .cunite {
            color: #DDA300;
            margin-right: 0.4rem;
        }
    }
`

export const ChatDetails = styled.div`
    display: flex;
    width: 100%;

    > h3 {
        font-size: 12px;
        margin-right: auto;
        display: flex;

        & .recipient{
            color: #11ADFF;
            margin-left: 0.5rem;
        }
    }

    > h2 {
        margin-left: 38px;
        font-size: 12px;
        margin-right: auto;
        display: flex;
        font-weight: 300;

        & .lastOnline{
            font-weight: 400;
            margin-left: 0.5rem;
        }
    }
`

export const VideoIcon = styled(VideocamIcon)`
    color: #11ADFF;
    border-radius: 5px;

    &:hover {
        transition: 0.1s ease-in;
        color: #1093D7;
        cursor: pointer;
        background-color: whitesmoke;
    }
`

export const ChatsContainer = styled.div`
    width: 100%;
    height: 465px;
    flex: 1;
    overflow: scroll;
    padding: 0px 30px;

    ::-webkit-scrollbar {
        display: none;
    }
    -ms-overflow-style: none;

    scrollbar-width: none;
`

export const MessageEndContainer = styled.div`
    margin-bottom: -50px;
    background-color: yellow;
    z-index: 100;
`

export const InputMessageContainer = styled.form`
    display: flex;
    align-items: center;
    padding: 0 20px;
    bottom: 0;
    width: 100%;
    height: 60px;
    border-top: 2px solid #f3f2ef;
`

export const Input = styled.input`
    flex: 1;
    outline: 0;
    border: none;
    padding: 10px;
`

export const SendButton = styled(SendIcon)`
    margin-left: 10px; 
    color: #DDA300;

    &:hover {
        background-color: whitesmoke;
        cursor: pointer;
    }
`