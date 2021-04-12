import React from 'react'
import styled from 'styled-components'

const Message = ({user, message, timestamp}) => {

    const ContainerType = user === 'self' ? SenderContainer : ReceiverContainer
    const MessageType = user === 'self' ? Sender : Receiver

    return (
        <ContainerType>
            <MessageType>
                <p>{message}</p>
            </MessageType>
            <h5>
                {timestamp}
            </h5>
        </ContainerType>
    )
}

export default Message

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;

    > h5 {
        color: black;
        padding: 0 10px;
        font-size: 9px;
        font-weight: 400;
        bottom: 0;
        right: 0;
    }
`

const SenderContainer = styled(MessageContainer)`
    > h5 {
        text-align: right;
    }
`

const ReceiverContainer = styled(MessageContainer)`
    > h5 {
        text-align: left;
    }
`

const MessageLayout = styled.div`
    width: fit-content;
    display: flex;
    align-items: center;
    border-radius: 4px;
    margin: 10px;
    padding: 15px;
    max-width: 380px;
    position: relative;
    text-align: center;
    height: fit-content;
    overflow-wrap: break-word;

    > p {
        color: white;
        
    }
`

const Sender = styled(MessageLayout)`
    margin-left: auto;
    background-color: #02c596;
`

const Receiver = styled(MessageLayout)`
    background-color: #DDA300;
    text-align: left;
`

const TimeStamp = styled.h5`
    color: black;
    padding: 0 10px;
    font-size: 9px;
    font-weight: 400;
    bottom: 0;
    right: 0;
    text-align: right;
`
