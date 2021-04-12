import React from 'react'
import {useState, useRef} from 'react'
import ProfileSidebar from '../Sidebars/ProfileSidebar'
import { ChatScreenWrapper, Screen, ChatScreenHeader, SubheadingWrapper, SubheadingText, Input, MessageEndContainer, SendButton, VideoIcon, ChatDetails, ProfileIcon, ProfileInfo, SidebarProfile, ChatsContainer, InputMessageContainer } from './ChatScreenElements'
import clement from '../../assets/frontend-temp/clement.jpg'
import profileBackground from '../../assets/images/profileBG.jpg'
import {IconButton} from '@material-ui/core'
import Message from './Message'

const ChatScreen = () => {

    const [input, setInput] = useState("")

    const messageEnd = useRef(null)

    const scrollToBottom = () => {
        messageEnd.current.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
        })
    }

    const sendMessage = (e) => {
        e.preventDefault()

        /*kirim message content*/

        setInput("")
        scrollToBottom()
    }

    return (
        <ChatScreenWrapper>
            <Screen>

                <ChatScreenHeader>
                    <ChatDetails>
                        <h3>CHAT WITH <div className='recipient'>THEODORE F.</div></h3>
                        <h2>LAST ONLINE: <div className='lastOnline'>14 HOURS AGO</div></h2>
                    </ChatDetails>
                    <VideoIcon fontSize='large'/>
                </ChatScreenHeader>

                <ChatsContainer >
                    <SubheadingWrapper>
                        <SubheadingText><h3><div className='cunite'>CUnited</div> at 11 January 2021</h3></SubheadingText>
                    </SubheadingWrapper>
                    <Message user="self" message="Hello there" timestamp="4:20 PM"/>
                    <Message user="other" message="Hello there" timestamp="4:21 PM"/>
                    <Message user="self" message="Hello there" timestamp="4:20 PM"/>
                    <Message user="other" message="Hello there" timestamp="4:21 PM"/>
                    <Message user="self" message="Hello there" timestamp="4:20 PM"/>
                    <Message user="other" message="Hello there" timestamp="4:21 PM"/>
                    <Message user="self" message="Hello there" timestamp="4:20 PM"/>
                    <Message user="other" message="Hello there" timestamp="4:21 PM"/>
                    <Message user="self" message="Hello there" timestamp="4:20 PM"/>
                    <Message user="other" message="Hello there" timestamp="4:21 PM"/>
                    <MessageEndContainer ref={messageEnd}/>
                </ChatsContainer>

                <InputMessageContainer>
                    <Input placeholder="Write your message" value={input} onChange={e => setInput(e.target.value)} />
                    <button hidden disabled={!input} type='submit' onClick={sendMessage}>Send Message</button>
                    <SendButton />
                </InputMessageContainer>

            </Screen>
        </ChatScreenWrapper>
    )
}

export default ChatScreen


