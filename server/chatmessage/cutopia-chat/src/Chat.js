import { IconButton } from '@material-ui/core';
import React, { useState } from 'react';
import "./Chat.css";
import AttachFileIcon from '@material-ui/icons/AttachFile';
import SendIcon from '@material-ui/icons/Send';
import axios from "./axios";
import VideocamIcon from '@material-ui/icons/Videocam';

function Chat({ messages }) {


    
    const [input, setInput] = useState("");

    const sendMessage = async (e) => {
        e.preventDefault();

        await axios.post('/messages/new', {
            message: input,
            name: "Pembeli",
            timestamp: "12:28PM",
            received: false,
        });

        setInput('');
    };

    return (
    <div className="Chat">
        <div className="Chat_header">
            <div className="Chat_headerInfo">
                <h4>CHAT WITH </h4>
            </div>

            <div className="Chat_headerRight">
                <IconButton>
                    <VideocamIcon />
                </IconButton>
            </div>

        </div>

        <div className="Chat_body">
            {messages.map(message => {
                return (
                <p 
                className={`Chat_message ${message.received && 'Chat_receiver' }`}
                >
                {message.message}

                 <span className="Chat_timestamp" >{message.timestamp}</span>
            </p> )
            })}

        </div>

        <div className="Chat_bar">
            <form>
                <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message"
                type="text"/>
                <button onClick={sendMessage} type="submit">
                    Send a message
                </button>
            </form>
            <IconButton>
                <AttachFileIcon />
            </IconButton>
            <IconButton onClick={sendMessage} click="submit">
                <SendIcon />
            </IconButton>
        </div>
    </div>
    );
    
}

export default Chat;

