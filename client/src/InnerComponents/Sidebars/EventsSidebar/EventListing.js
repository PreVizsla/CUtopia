import React from 'react'

import { Event, EventHeader, EventDetails, EventImageWrapper, EventInfo, RegisterNow } from './EventListingElements'

const EventListing = ({name, date, image, description}) => {
    return (
        <>
            <Event>
                <EventHeader>
                    <h4>{name}</h4>
                    <p>{date}</p>
                </EventHeader>
                <EventDetails>
                    <EventImageWrapper>
                        <img src={image} alt=''/>
                    </EventImageWrapper>
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
