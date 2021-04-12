import React from 'react'

import { JobPostContainer, JobPostDetails, MoreJobButton, JobAvatar, JobInformation, JobPos, JobDesc } from './JobPostElements'

const JobPost = ({logo, position, companyName, location, description}) => {
    return (
        <>
            <JobPostContainer>
                <JobPostDetails>
                    <JobAvatar src={logo}/>
                    <JobInformation>
                        <JobPos>
                            <h4>{position}</h4>
                            <div className="details"><h1>{companyName}</h1><p>{location}</p></div>
                            <JobDesc>
                                {description}
                            </JobDesc>
                        </JobPos>
                    </JobInformation>
                    
                </JobPostDetails>
                <MoreJobButton>
                    MORE
                </MoreJobButton>
            </JobPostContainer>
        </>
    )
}

export default JobPost
