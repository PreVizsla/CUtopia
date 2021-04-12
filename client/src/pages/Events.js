import React from 'react';

import Navbar from '../InnerComponents/Navbar'
import Events from '../InnerComponents/Events'
import Footer from '../InnerComponents/Footer'

import './Inner.css';

export default function Home() {
  return (
    <div className="InnerPage">
      <Navbar />
      <div className="outerContainer">
        <div className="InnerBody">
          <Events />
        </div>
      </div>
      {/* Footer refers to the section on the bottom of the page consisting of helpful navigation links */}
      <Footer />
    </div>
  )
}