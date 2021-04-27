import React, {useState, useEffect} from 'react'

import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';

import {EventsWrapper, SidebarWrapper, NewEventsButtonWrapper, NewEventsButton, SubheadingWrapper, SubheadingText, EventsGrid } from './EventsElements'
import {Search, SearchContent, SearchHeader, SearchTitle, ContentForm, SearchSubmit, FilterIcon} from '../SearchElements'
import ProfileSidebar from '../Sidebars/ProfileSidebar'
import JobsSidebar from '../Sidebars/JobsSidebar'
import EventCard from './EventCard'
import Popup from './popup'
import EventForm from './EventForm'

import AppleLogo from '../../assets/frontend-temp/Apple-logo.jpg'
import FacebookLogo from '../../assets/frontend-temp/Facebook-logo.png'
import GoogleLogo from '../../assets/frontend-temp/Google-logo.jpg'

const eventListings = [
    {
        logo: AppleLogo,
        eventname: "Apple UI/UX Workshop",
        date: "1 January 2021",
        location: "Hong Kong",
        description: "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services."
    },
    {
        logo: FacebookLogo,
        eventname: "The Future of Social Networking",
        date: "1 January 2021",
        location: "Online",
        description: "Get an amazing internship experience at our company this summer and apply now!"
    },
    {
        logo: GoogleLogo,
        eventname: "AI Opportunities in Google",
        date: "1 January 2021",
        location: "Hong Kong",
        description: "Get an amazing internship experience at our company this summer and apply now!"
    }
]

const Events = () => {
    
    // allows filling in form to post a new event
    const [openPopup, setOpenPopup] = useState(false);

    const [isSubmittedProfileForm, JobIsSubmitted] = useState(false);
    function setSubmitTrue() {
      JobIsSubmitted(true);
      setOpenPopup(!openPopup);
      JobIsSubmitted(false);
    }

    // allows searching of new events
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = e => {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        const filtered = eventListings.filter(event =>
            event.eventname.toLowerCase().includes(searchQuery)
        )
        setSearchResults(filtered)
    }, [searchQuery])

    return (
        <>
            {/* Lft side of the Events Page, showing the events in a grid fashion */}
            <EventsWrapper>
                {/* Allow searching */}
                <Search>
                    <SearchHeader>
                        <SearchTitle>FIND EVENTS FOR YOU</SearchTitle>
                    </SearchHeader>
                    <SearchContent>
                        <ContentForm value={searchQuery} onChange={handleSearch} placeholder="Search Events" type='text'/>
                        <FilterIcon>
                            <FilterListIcon />
                        </FilterIcon>
                        <SearchSubmit>
                            <SearchIcon />
                        </SearchSubmit>
                    </SearchContent>
                </Search>
                {/* Events for You Divider */}
                <SubheadingWrapper>
                    <SubheadingText><h3>EVENTS FOR YOU</h3></SubheadingText>
                </SubheadingWrapper>
                {/* Map Events laid out in a grid fashion */}
                <EventsGrid>
                {searchResults.map((data)=>{
                    return <EventCard
                        logo={data.logo}
                        name={data.eventname}
                        date={data.date}
                        location={data.location}
                        description={data.description}
                    />
                })}      
                </EventsGrid>
            </EventsWrapper>
            {/* Right side of Events Page, filled with 3 items: make new Event, Profile, and Jobs Sidebar */}
            <SidebarWrapper>
                <NewEventsButtonWrapper>
                    <NewEventsButton onClick = {() => setOpenPopup(true)}>
                        POST AN EVENT
                    </NewEventsButton>
                </NewEventsButtonWrapper>
                <ProfileSidebar />
                <JobsSidebar />
            </SidebarWrapper>

            {/* POPUP COMPONENT */}
            <Popup 
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
            >
              {!isSubmittedProfileForm ?(
                //   CHILDREN COMPONENT
                <EventForm submitFormEvent={setSubmitTrue}/>
              ):(
                <></>            
              )} 
            </Popup>
        </>
    )
}

export default Events
