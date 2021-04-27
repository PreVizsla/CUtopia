import React from 'react'
import { ChatPersonContainer, UserAvatar, DetailsContainer } from './ActiveChatElements'

const ActiveChat = ({avatar, name, last}) => {
    return (
        <>
            {/* Each active chat shows the avatar, recipient name, and last message */}
            <ChatPersonContainer>
                <UserAvatar src={avatar}/>
                <DetailsContainer>
                    <h1>{name}</h1>
                    <h3>{last}</h3>
                </DetailsContainer>
            </ChatPersonContainer>
        </>
    )
}

export default ActiveChat
