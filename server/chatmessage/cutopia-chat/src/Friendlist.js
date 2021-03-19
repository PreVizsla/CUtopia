import React from 'react';
import "./Friendlist.css";
import Friendchats from "./Friendchats";

function Friendlist() {
    return (
    <div className="Friendlist">
        <div className="Friendlist_header">
            <h4>CHATS</h4>
        </div>

        <div className="Friendlist_chats">
            <Friendchats />
            <Friendchats />
            <Friendchats />
        </div>

        <div className="Friendlist_footer">
            <button> FIND MENTORS </button>
        </div>
    </div>
    );
}

export default Friendlist;
