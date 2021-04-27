import {React , useState} from 'react';
import SideNavbar from '../InnerComponents/SideNavbar'
import Navbar from '../InnerComponents/Navbar'
import Chat from '../InnerComponents/Chat'
import ChatScreen from '../InnerComponents/Chat/ChatScreen'
import Footer from '../InnerComponents/Footer'

import './Inner.css';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <div className="InnerPage">
      {/* Collapsable sidebar for mobile view */}
      <SideNavbar isOpen={isOpen} toggle={toggle}/>
      {/* Actual sidebar */}
      <Navbar toggle={toggle} />
      <div className="outerContainer">
        <div className="InnerBody">
          {/* Chat sidebar displaying active chats */}
          <Chat />
          {/* Actual chat screen with messages */}
          <ChatScreen />
        </div>
      </div>
      {/* Footer refers to the section on the bottom of the page consisting of helpful navigation links */}
      <Footer />
    </div>
  )
}