import React from 'react'
import ActiveChat from './ActiveChat'
import { SidebarWrapper, ActiveChatsSidebar, ActiveChatsSidebarHeader, ActiveChats, FindMentorButtonWrapper, FindMentorButton } from './ChatSidebarElements'

import elon from '../../assets/frontend-temp/elon.jpg'
import bill from '../../assets/frontend-temp/bill.jpg'
import jeff from '../../assets/frontend-temp/jeff.jpg'
import theo from '../../assets/frontend-temp/theo.jpg'
import joma from '../../assets/frontend-temp/joma.jpg'
import patrick from '../../assets/frontend-temp/patrick.jpg'

const activeChats = [
    {
        avatar: elon,
        name: "Elon Musk",
        last: "Really nice talking with you!"
    },
    {
        avatar: bill,
        name: "Bill Gates",
        last: "Ok then, just tell me when you are ready."
    },
    {
        avatar: jeff,
        name: "Jeff Bezos",
        last: "We are interested in acquiring your company"
    },
    {
        avatar: theo,
        name: "Theodore Fabian",
        last: "Sweet!"
    },
    {
        avatar: joma,
        name: "Jonathan Ma",
        last: "Thank you so much for your time!"
    },
    {
        avatar: patrick,
        name: "Patrick Shuy",
        last: "Hello, I am the techlead"
    }
]

const Chat = () => {
    return (
        <>
        {/* Is the left sidebar on the Chats page, where users can see mother members they are chatting, and also find other mentors */}
            <SidebarWrapper>
                {/* Allows CUtopians to see the people they are chatting */}
                <ActiveChatsSidebar>
                    <ActiveChatsSidebarHeader>
                        <h3>CHATS</h3>
                    </ActiveChatsSidebarHeader>
                    {/* Maps all the current active chats */}
                    <ActiveChats>
                        {activeChats.map((data)=>{
                            return <ActiveChat
                                avatar={data.avatar}
                                name={data.name}
                                last={data.last}
                            />
                        })}
                    </ActiveChats>
                </ActiveChatsSidebar>
                {/* Button for users to find more mentors */}
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
