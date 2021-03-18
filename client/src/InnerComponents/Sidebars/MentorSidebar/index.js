import React from 'react'

import elon from '../../../assets/frontend-temp/elon.jpg'
import joma from '../../../assets/frontend-temp/joma.jpg'
import patrick from '../../../assets/frontend-temp/patrick.jpg'
import MentorListing from './MentorListing'
import { SeeMore, SidebarMentor, SidebarMentorButton, SidebarMentorHeader, SidebarMentors, SidebarMentorWrapper, Suggestions } from './MentorSidebarElements'

const MentorSidebar = () => {
    return (
        <>
            <SidebarMentor>
                {/* Mentor Suggestions sidebar consists of 3 sections: Header, Suggested Mentors, and a button for 'More Mentors'*/}
                <SidebarMentorWrapper>
                    {/* Header */}
                    <SidebarMentorHeader>
                        <Suggestions><div className='mentor'>MENTOR</div>SUGGESTIONS</Suggestions>
                        <SeeMore>SEE MORE</SeeMore>
                    </SidebarMentorHeader>
                    {/* Suggested Mentors */}
                    <SidebarMentors>
                        <MentorListing
                            name='Elon Musk'
                            job='CEO at Tesla & SpaceX'
                            avatar={elon}
                        />
                        <MentorListing
                            name='Jonathan Ma'
                            job='Data Scientist at Facebook'
                            avatar={joma}
                        />
                        <MentorListing
                            name='Patrick Shuy'
                            job='Ex-Facebook Tech Lead'
                            avatar={patrick}
                        />
                    </SidebarMentors>
                    {/* More Mentors Button */}
                    <SidebarMentorButton>
                        MORE MENTORS
                    </SidebarMentorButton>
                </SidebarMentorWrapper>
            </SidebarMentor>  
        </>
    )
}

export default MentorSidebar
