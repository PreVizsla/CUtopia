import Profile from '../InnerComponents/Profile';
import Footer from '../InnerComponents/Footer'
import Navbar from '../InnerComponents/Navbar';
import {React, useEffect, useState} from 'react';
import SideNavbar from '../InnerComponents/SideNavbar'
import './Inner.css';

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  //This page represents the homepage which is the feed, containing the navbar on top, the feed page body itself, and the footer
  return (
    <div className="InnerPage">
      {/* Navbar refers to the navigation bar constantly on the top of the page */}
      <SideNavbar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <div className="outerContainer">
        <div className="InnerBody">
          <Profile />
        </div>
      </div>
      {/* Footer refers to the section on the bottom of the page consisting of helpful navigation links */}
      <Footer />
    </div>
  );
}

export default App;