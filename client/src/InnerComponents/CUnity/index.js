import React, {useState, useEffect} from 'react'
import FlipMove from 'react-flip-move'

import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';

import ProfileSidebar from '../Sidebars/ProfileSidebar'
import EventsSidebar from '../Sidebars/EventsSidebar'
import JobsSidebar from '../Sidebars/JobsSidebar'

import { SidebarWrapper, CUnityWrapper, SubheadingWrapper, SubheadingText, FindRandomWrapper, RandomText, RandomButton, ProfileGrid } from './CUnityElements'
import {Search, SearchContent, SearchHeader, SearchTitle, ContentForm, SearchSubmit, FilterIcon} from '../SearchElements'
import ProfileCard from './ProfileCard';

import albert from '../../assets/frontend-temp/albert.jpg'
import adi from '../../assets/frontend-temp/adi.jpg'
import theo from '../../assets/frontend-temp/theo.jpg'

const personListings = [
    {
        avatar: theo,
        name: "Theodore Fabian",
        desc: "2nd Year CSE Student"
    },
    {
        avatar: albert,
        name: "Christopher Albert",
        desc: "2nd Year CSE Student"
    },
    {
        avatar: adi,
        name: "Aditya Varshney",
        desc: "2nd Year CSE Sudent"
    }
]


const CUnity = () => {

    // used for searching the names of other CUtopians in the platform
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = e => {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        const filtered = personListings.filter(person =>
            person.name.toLowerCase().includes(searchQuery)
        )
        setSearchResults(filtered)
    }, [searchQuery])


    return (
        <>
            {/* Sidebars on the left for quick access to other CUtopia facilities */}
            <SidebarWrapper>
                <ProfileSidebar />
                <EventsSidebar />
                <JobsSidebar />
            </SidebarWrapper>
            {/* Main feature in which a CUtopian can look for other CUtopians */}
            <CUnityWrapper>
                {/* Allow searching */}
                <Search>
                    <SearchHeader>
                        <SearchTitle>Explore CUtopia</SearchTitle>
                    </SearchHeader>
                    <SearchContent>
                        <ContentForm value={searchQuery} onChange={handleSearch} placeholder="Search Fellow CUtopians" type='text'/>
                        <FilterIcon>
                            <FilterListIcon />
                        </FilterIcon>
                        <SearchSubmit>
                            <SearchIcon />
                        </SearchSubmit>
                    </SearchContent>
                </Search>
                {/* CUtopians for You Divider */}
                <SubheadingWrapper>
                    <SubheadingText><h3>CUTOPIANS FOR YOU</h3></SubheadingText>
                </SubheadingWrapper>
                {/* CUtopians Random */}
                <FindRandomWrapper>
                    <RandomText>
                        <p>?</p>
                        Don't know who to CUnite with? Check out our randomized matching feature!
                    </RandomText>
                    <RandomButton>
                        FIND RANDOM
                    </RandomButton>
                </FindRandomWrapper>
                {/* CUtopians displayed in cards */}
                <ProfileGrid>                   
                    {searchResults.map((data)=>{
                        return <ProfileCard
                            avatar={data.avatar}
                            name={data.name}
                            desc={data.desc}
                        />
                    })}
                </ProfileGrid>
            </CUnityWrapper>   
        </>
    )
}

export default CUnity
