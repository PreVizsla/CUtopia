import React from 'react'

import { JobPostContainer, JobPostDetails, MoreJobButton, JobAvatar, JobInformation, JobPos, JobDesc } from './JobPostElements'

const JobPost = ({logo, position, companyName, location, description}) => {
    return (
        <>  
            {/* Individual display for each job listing consisting of company logo, job header, job details and the find out more button */}
            <JobPostContainer>
                <JobPostDetails>
                    {/* Job Logo */}
                    <JobAvatar src={logo}/>
                    {/* Job Header and Details */}
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
                {/* Find out More button */}
                <MoreJobButton>
                    MORE
                </MoreJobButton>
            </JobPostContainer>
        </>
    )
}

export default JobPost
