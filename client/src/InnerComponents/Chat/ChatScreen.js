import React from 'react'
import {useState, useRef} from 'react'
import { ChatScreenWrapper, Screen, ChatScreenHeader, SubheadingWrapper, SubheadingText, Input, MessageEndContainer, SendButton, VideoIcon, ChatDetails, ChatsContainer, InputMessageContainer } from './ChatScreenElements'
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
                    <a href="http://localhost:8080" target="_blank"    >
                    <VideoIcon  fontSize='large'/>
                    {/* onClick="window.open('https://www.youtube.com')" */}
                    </a>
                </ChatScreenHeader>

                <ChatsContainer >
                    <SubheadingWrapper>
                        <SubheadingText><h3><div className='cunite'>CUnited</div> at 11 January 2021</h3></SubheadingText>
                    </SubheadingWrapper>
                    <Message user="self" message="Hello there! Nice to meet you!" timestamp="4:20 PM"/>
                    <Message user="other" message="Hey! Nice to meet you too." timestamp="4:24 PM"/>
                    <Message user="self" message="I wanted to CUnite with you to know more about what being a software engineering is like" timestamp="4:30 PM"/>
                    <Message user="other" message="Believe me, you will enjoy your time being a software engineer!" timestamp="4:35 PM"/>
                    <Message user="self" message="Sweet!" timestamp="4:50 PM"/>
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


