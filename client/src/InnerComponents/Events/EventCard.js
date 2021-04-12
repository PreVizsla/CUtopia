import React from 'react'

import image from '../../assets/frontend-temp/elonPost.jpg'
import { Card, CardImageWrapper, EventDetailsWrapper, EventInfoWrapper, EventDescriptionWrapper, EventAvatar, EventName, ButtonContainer, KnowMore } from './EventCardElements'

const EventCard = ({logo, name, date, location, description}) => {
    return (
        <>
            <Card>
                <CardImageWrapper>
                    <img src={image} alt='' />
                </CardImageWrapper>
                <EventDetailsWrapper>
                    <EventInfoWrapper>
                            <EventAvatar src={logo}/>
                            {/* Name and Position of author */}
                            <EventName>
                                <div className="name"><h4>{name}</h4></div>
                                <div className="details"><h1>{date}</h1><p>{location}</p></div>
                            </EventName>
                    </EventInfoWrapper>
                    <EventDescriptionWrapper>
                        {description}
                    </EventDescriptionWrapper>
                    <ButtonContainer>
                        <KnowMore>FIND OUT MORE</KnowMore>
                    </ButtonContainer>
                </EventDetailsWrapper>
            </Card>
        </>
    )
}

export default EventCard
