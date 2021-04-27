import React from 'react'

import { Event, EventHeader, EventDetails, EventImageWrapper, EventInfo, RegisterNow } from './EventListingElements'

const EventListing = ({name, date, image, description}) => {
    return (
        <>                
            {/* Each suggested mentor can be broken down to 4 parts: Event Header, Event Image, Event Details and Register button */}
            <Event>
                {/* Event Header */}
                <EventHeader>
                    <h4>{name}</h4>
                    <p>{date}</p>
                </EventHeader>
                {/* Event Details */}
                <EventDetails>
                    {/* Event Image */}
                    <EventImageWrapper>
                        <img src={image} alt=''/>
                    </EventImageWrapper>
                    {/* Event Description and Register Button */}
                    <EventInfo>
                        <p>{description}</p>
                        <RegisterNow>Register</RegisterNow>
                    </EventInfo>
                </EventDetails>
            </Event>
        </>
    )
}

export default EventListing
