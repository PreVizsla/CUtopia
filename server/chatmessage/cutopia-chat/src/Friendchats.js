import React from 'react';
import "./Friendchats.css";
import Avatar from '@material-ui/core/Avatar';

function Friendchats() {
    return (
        <div className="friendChats">
            <Avatar />
            <div className="friendChats_info">
                <h2>Room name</h2>
                <p>This is the last message</p>
            </div> 
        </div>
    )
}

export default Friendchats
