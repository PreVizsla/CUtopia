import React from 'react'

import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';

import ProfileSidebar from '../Sidebars/ProfileSidebar'
import EventsSidebar from '../Sidebars/EventsSidebar'
import JobsSidebar from '../Sidebars/JobsSidebar'

import { SidebarWrapper, CUnityWrapper, SubheadingWrapper, SubheadingText, FindRandomWrapper, RandomText, RandomButton, ProfileGrid } from './CUnityElements'
import {Search, SearchContent, SearchHeader, SearchTitle, ContentForm, SearchSubmit, FilterIcon} from '../SearchElements'
import ProfileCard from './ProfileCard';


const index = () => {
    return (
        <>
            <SidebarWrapper>
                <ProfileSidebar />
                <EventsSidebar />
                <JobsSidebar />
            </SidebarWrapper>
            <CUnityWrapper>
                {/* Allow searching */}
                <Search>
                    <SearchHeader>
                        <SearchTitle>Explore CUtopia</SearchTitle>
                    </SearchHeader>
                    <SearchContent>
                        <ContentForm placeholder="Search Fellow CUtopians" type='text'/>
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
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                </ProfileGrid>
            </CUnityWrapper>   
        </>
    )
}

export default index
