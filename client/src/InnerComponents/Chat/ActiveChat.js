import React from 'react'
import { ChatPersonContainer, UserAvatar, DetailsContainer } from './ActiveChatElements'

const ActiveChat = () => {
    return (
        <>
            <ChatPersonContainer>
                <UserAvatar>
                    U
                </UserAvatar>
                <DetailsContainer>
                    <h1>Name</h1>
                    <h3>Last Chat</h3>
                </DetailsContainer>
            </ChatPersonContainer>
        </>
    )
}

export default ActiveChat
