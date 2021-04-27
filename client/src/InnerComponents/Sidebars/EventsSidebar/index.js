import React from 'react'

import EventImage from '../../../assets/frontend-temp/eventImage.jpg'
import EventListing from './EventListing'
import { SidebarEventsListing, SidebarEvents, SidebarEventsButton, SidebarEventsHeader, SidebarEventsTitle, SidebarEventsWrapper } from './EventsSidebarElements'

const index = () => {
    return (
        <>
            <SidebarEvents>
                {/* Mentor Suggestions sidebar consists of 3 sections: Header, Suggested Events, and a button for 'More Events'*/}
                <SidebarEventsWrapper>
                    {/* Header */}
                    <SidebarEventsHeader>
                        <SidebarEventsTitle>EVENTS FOR YOU</SidebarEventsTitle>
                    </SidebarEventsHeader>
                    {/* Suggested Events */}
                    <SidebarEventsListing>
                        <EventListing 
                            name='Microsoft Recruitment Talk'
                            date='1 January 2021'
                            image={EventImage}
                            description='Get to know more about the opportunities at our company on our event! sasdasd dasd adasdasd dasdasdad'
                        />
                        <EventListing 
                            name='Microsoft Recruitment Talk'
                            date='1 January 2021'
                            image={EventImage}
                            description='Get to know more about the opportunities at our company on our event!'
                        />
                        <EventListing 
                            name='Microsoft Recruitment Talk'
                            date='1 January 2021'
                            image={EventImage}
                            description='Get to know more about the opportunities at our company on our event!'
                        />
                    </SidebarEventsListing>
                    {/* More Events Button */}
                    <SidebarEventsButton>
                        MORE EVENTS
                    </SidebarEventsButton>
                </SidebarEventsWrapper>
            </SidebarEvents>
        </>
    )
}

export default index
