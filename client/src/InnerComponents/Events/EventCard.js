import React from 'react'

import image from '../../assets/frontend-temp/elonPost.jpg'
import { Card, CardImageWrapper, EventDetailsWrapper, EventInfoWrapper, EventDescriptionWrapper, EventAvatar, EventName, ButtonContainer, KnowMore } from './EventCardElements'

const EventCard = ({logo, name, date, location, description}) => {
    return (
        <>
            {/* A card to display each individual event consisting of event image, event header, details, and a "FIND OUT MORE" Button */}
            <Card>
                {/* Event Image */}
                <CardImageWrapper>
                    <img src={image} alt='' />
                </CardImageWrapper>
                <EventDetailsWrapper>
                    <EventInfoWrapper>
                            {/* Logo of event organizer */}
                            <EventAvatar src={logo}/>
                            {/* Event header */}
                            <EventName>
                                <div className="name"><h4>{name}</h4></div>
                                <div className="details"><h1>{date}</h1><p>{location}</p></div>
                            </EventName>
                    </EventInfoWrapper>
                    {/* Event details */}
                    <EventDescriptionWrapper>
                        {description}
                    </EventDescriptionWrapper>
                    {/* Find Out More Button */}
                    <ButtonContainer>
                        <KnowMore>FIND OUT MORE</KnowMore>
                    </ButtonContainer>
                </EventDetailsWrapper>
            </Card>
        </>
    )
}

export default EventCard
