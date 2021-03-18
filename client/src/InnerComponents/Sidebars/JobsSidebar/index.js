import React from 'react'

import AppleLogo from '../../../assets/frontend-temp/Apple-logo.jpg'
import FacebookLogo from '../../../assets/frontend-temp/Facebook-logo.png'
import GoogleLogo from '../../../assets/frontend-temp/Google-logo.jpg'
import JobListing from './JobListing'
import { SidebarJobListing, SidebarJobs, SidebarJobsButton, SidebarJobsHeader, SidebarJobsTitle, SidebarJobsWrapper } from './JobsSidebarElements'

const JobsSidebar = () => {
    return (
        <>
            <SidebarJobs>
                {/* Job Suggestions consists of 3 sections: Header, Suggested Jobs, and a button for 'More Jobs */}
                <SidebarJobsWrapper>
                    {/* Header */}
                    <SidebarJobsHeader>
                        <SidebarJobsTitle>JOBS FOR YOU</SidebarJobsTitle>
                    </SidebarJobsHeader>
                    {/* Suggested Jobs */}
                    <SidebarJobListing>
                        <JobListing
                            position='UI/UX Designer'
                            company='Facebook'
                            companyLogo={FacebookLogo}
                            description='Get an amazing internship experience at our company this summer and apply now!'
                        />
                        <JobListing
                            position='Machine Learning Intern'
                            company='Google'
                            companyLogo={GoogleLogo}
                            description='Get an amazing internship experience at our company this summer and apply now!'
                        />
                        <JobListing
                            position='Product Designer Intern'
                            company='Apple'
                            companyLogo={AppleLogo}
                            description='Get an amazing internship experience at our company this summer and apply now!'
                        />
                    </SidebarJobListing>
                    {/* More Jobs Buttons */}
                    <SidebarJobsButton>
                        MORE JOBS
                    </SidebarJobsButton>
                </SidebarJobsWrapper>
            </SidebarJobs>
        </>
    )
}

export default JobsSidebar
