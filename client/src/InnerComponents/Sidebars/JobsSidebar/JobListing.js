import React from 'react'

import { ApplyNow, Job, JobDetails, JobHeader, JobInfo, SidebarJobAvatar } from './JobListingElements'

const JobListing = ({position, company, companyLogo, description}) => {
    return (
        <>
            {/* Each suggested job can be broken down to 2 parts: Position and Company name AND Job details and Apply button */}
            <Job>
                {/* Position and Company name */}
                <JobHeader>
                    <h4>{position}</h4>
                    <p>{company}</p>
                </JobHeader>
                {/* Job details including company logo, description and Apply button */}
                <JobDetails>
                    {/* Company logo */}
                    <SidebarJobAvatar src={companyLogo}/>
                    {/* Job Description and Apply button */}
                    <JobInfo>
                        {/* Job Description */}
                        <p>{description}</p>
                        {/* Apply button */}
                        <ApplyNow>APPLY</ApplyNow>
                    </JobInfo>
                </JobDetails>
            </Job>
        </>
    )
}

export default JobListing
