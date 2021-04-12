import Feed from '../InnerComponents/Feed';
import Footer from '../InnerComponents/Footer'
import Navbar from '../InnerComponents/Navbar';
import {React, useEffect} from 'react';

import './Inner.css';

function App() {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  //This page represents the homepage which is the feed, containing the navbar on top, the feed page body itself, and the footer
  return (
    <div className="InnerPage">
      {/* Navbar refers to the navigation bar constantly on the top of the page */}
      <Navbar />
      <div className="InnerBody">
        <Feed />
      </div>
      {/* Footer refers to the section on the bottom of the page consisting of helpful navigation links */}
      <Footer />
    </div>
  );
}

export default App;