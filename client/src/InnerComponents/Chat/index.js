import React from 'react'
import ActiveChat from './ActiveChat'
import { SidebarWrapper, ActiveChatsSidebar, TestBlock, ActiveChatsSidebarHeader, ActiveChats, FindMentorButtonWrapper, FindMentorButton } from './ChatSidebarElements'

const Chat = () => {
    return (
        <>
            <SidebarWrapper>

                <ActiveChatsSidebar>
                    <ActiveChatsSidebarHeader>
                        <h3>CHATS</h3>
                    </ActiveChatsSidebarHeader>
                    <ActiveChats>
                        <ActiveChat />
                        <ActiveChat />
                        <ActiveChat />
                        <ActiveChat />
                        <ActiveChat />
                        <ActiveChat />
                    </ActiveChats>
                </ActiveChatsSidebar>

                <FindMentorButtonWrapper>
                    <FindMentorButton>
                        FIND MENTORS
                    </FindMentorButton>
                </FindMentorButtonWrapper>

            </SidebarWrapper>
        </>
    )
}

export default Chat
