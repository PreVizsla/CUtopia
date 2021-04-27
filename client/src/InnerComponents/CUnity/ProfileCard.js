import React, { forwardRef } from 'react'

import { ProfileCardWrapper, ProfileCardInfo, ProfileAvatar, PersonInfo, CUniteButton } from './ProfileCardElements'

const ProfileCard = forwardRef(({avatar, name, desc}, ref) => {
    return (
        <>  
            {/* Component for the card each user is displayed in, consists of the CUtopian's avatar, name, description and a button to CUnite */}
            <ProfileCardWrapper ref={ref}>
                {/* Displays, avatar, name and description */}
                <ProfileCardInfo>
                    <ProfileAvatar src={avatar}/>
                    <PersonInfo>
                        <h4>{name}</h4>
                        <p>{desc}</p>
                    </PersonInfo>
                </ProfileCardInfo>
                {/* Quick access CUnite button */}
                <CUniteButton>
                    +CUnite
                </CUniteButton>
            </ProfileCardWrapper>   
        </>
    )
})

export default ProfileCard
