import React from 'react'

import { CUniteMentor, Mentor, MentorInfo, SidebarMentorAvatar } from './MentorListingElements'

const MentorListing = ({name, job, avatar}) => {
    return (
        <>  
            {/* Each suggested mentor can be broken down to 2 parts: Mentor Avatar, Mentor Details and +CUnite button */}
            <Mentor>
                {/* Mentor Avatar */}
                <SidebarMentorAvatar src={avatar} />
                {/* Mentor Details and CUnite button */}
                <MentorInfo>
                    {/* Mentor Info */}
                    <h4>{name}</h4>
                    <p>{job}</p>
                    {/* CUnite button */}
                    <CUniteMentor>+ CUnite</CUniteMentor>
                </MentorInfo>
            </Mentor>
        </>
    )
}

export default MentorListing
