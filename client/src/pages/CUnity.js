import {React , useState} from 'react';
import SideNavbar from '../InnerComponents/SideNavbar'
import Navbar from '../InnerComponents/Navbar'
import CUnity from '../InnerComponents/CUnity'
import Footer from '../InnerComponents/Footer'

import './Inner.css';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }
  return (
    <div className="InnerPage">
      <SideNavbar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle} />
      <div className="outerContainer">
        <div className="InnerBody">
          <CUnity />
        </div>
      </div>
      {/* Footer refers to the section on the bottom of the page consisting of helpful navigation links */}
      <Footer />
    </div>
  )
}