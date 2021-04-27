import React, {useState, useEffect} from 'react'

import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';

import {JobsWrapper, SidebarWrapper, SubheadingWrapper, SubheadingText, NewJobButtonWrapper, NewJobButton} from './JobsElements'
import {Search, SearchContent, SearchHeader, SearchTitle, ContentForm, SearchSubmit, FilterIcon} from '../SearchElements'
import ProfileSidebar from '../Sidebars/ProfileSidebar';
import EventsSidebar from '../Sidebars/EventsSidebar';
import JobPost from './JobPost';
import Popup from './popup';
import JobForm from './JobForm';

import AppleLogo from '../../assets/frontend-temp/Apple-logo.jpg'
import FacebookLogo from '../../assets/frontend-temp/Facebook-logo.png'
import GoogleLogo from '../../assets/frontend-temp/Google-logo.jpg'

const jobListings = [
    {
        logo: AppleLogo,
        company: "Apple",
        position: "Product Engineer Intern",
        location: "Hong Kong",
        description: "Apple Inc. is an American multinational technology company headquartered in Cupertino, California, that designs, develops, and sells consumer electronics, computer software, and online services."
    },
    {
        logo: FacebookLogo,
        company: "Facebook",
        position: "UI/UX Designer",
        location: "Hong Kong",
        description: "Get an amazing internship experience at our company this summer and apply now!"
    },
    {
        logo: GoogleLogo,
        company: "Google",
        position: "Machine Learning Intern",
        location: "Hong Kong",
        description: "Get an amazing internship experience at our company this summer and apply now!"
    }
]

const Jobs = () => {

    // for use of form when adding new job
    const [openPopup, setOpenPopup] = useState(false);

    const [isSubmittedProfileForm, JobIsSubmitted] = useState(false);
    function setSubmitTrue() {
      JobIsSubmitted(true);
      setOpenPopup(!openPopup);
      JobIsSubmitted(false);
    }

    // allows searching of jobs
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = e => {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        const filtered = jobListings.filter(job =>
            job.position.toLowerCase().includes(searchQuery)
        )
        setSearchResults(filtered)
    }, [searchQuery])

    return (
        <>
            {/* Left side of the Jobs Page, showing the jobs in a list fashion */}
            <JobsWrapper>
                {/* Allow searching */}
                <Search>
                    <SearchHeader>
                        <SearchTitle>JUMPSTART YOUR CAREER NOW</SearchTitle>
                    </SearchHeader>
                    <SearchContent>
                        <ContentForm value={searchQuery} onChange={handleSearch} placeholder="Search Jobs" type='text'/>
                        <FilterIcon>
                            <FilterListIcon />
                        </FilterIcon>
                        <SearchSubmit>
                            <SearchIcon />
                        </SearchSubmit>
                    </SearchContent>
                </Search>
                {/* Jobs for You Divider */}
                <SubheadingWrapper>
                    <SubheadingText><h3>JOBS FOR YOU</h3></SubheadingText>
                </SubheadingWrapper>
                {/* Maps Individual Available Jobs */}
                {searchResults.map((data)=>{
                    return <JobPost
                        logo={data.logo}
                        position={data.position}
                        companyName={data.company}
                        location={data.location}
                        description={data.description}
                    />
                })}
            </JobsWrapper>
            {/* Right side of Jobs Page, filled with 3 items: Post new Job, Profile, and Events Sidebar */}
            <SidebarWrapper>
                <NewJobButtonWrapper>
                    <NewJobButton onClick = {() => setOpenPopup(true)}>
                        POST A JOB
                    </NewJobButton>
                </NewJobButtonWrapper>
                <ProfileSidebar />
                <EventsSidebar />
            </SidebarWrapper>
            
            {/* POPUP COMPONENT */}
            <Popup 
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
            >
              {!isSubmittedProfileForm ?(
                //   CHILDREN COMPONENT
                <JobForm submitFormJob={setSubmitTrue}/>
              ):(
                <></>            
              )} 
            </Popup>
        </>
    )
}

export default Jobs
