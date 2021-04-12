import React from 'react'

import EventImage from '../../../assets/frontend-temp/eventImage.jpg'
import EventListing from './EventListing'
import { SidebarEventsListing, SidebarEvents, SidebarEventsButton, SidebarEventsHeader, SidebarEventsTitle, SidebarEventsWrapper } from './EventsSidebarElements'

const index = () => {
    return (
        <>
            <SidebarEvents>
                <SidebarEventsWrapper>
                    <SidebarEventsHeader>
                        <SidebarEventsTitle>EVENTS FOR YOU</SidebarEventsTitle>
                    </SidebarEventsHeader>
                    <SidebarEventsListing>
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
                        <EventListing 
                            name='Microsoft Recruitment Talk'
                            date='1 January 2021'
                            image={EventImage}
                            description='Get to know more about the opportunities at our company on our event!'
                        />
                    </SidebarEventsListing>
                    <SidebarEventsButton>
                        MORE EVENTS
                    </SidebarEventsButton>
                </SidebarEventsWrapper>
            </SidebarEvents>
        </>
    )
}

export default index
