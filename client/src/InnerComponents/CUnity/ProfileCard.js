import React, { forwardRef } from 'react'

import { ProfileCardWrapper, ProfileCardInfo, ProfileAvatar, PersonInfo, CUniteButton } from './ProfileCardElements'

const ProfileCard = forwardRef(({avatar, name, desc}, ref) => {
    return (
        <>
            <ProfileCardWrapper ref={ref}>
                <ProfileCardInfo>
                    <ProfileAvatar src={avatar}/>
                    <PersonInfo>
                        <h4>{name}</h4>
                        <p>{desc}</p>
                    </PersonInfo>
                </ProfileCardInfo>
                <CUniteButton>
                    +CUnite
                </CUniteButton>
            </ProfileCardWrapper>   
        </>
    )
})

export default ProfileCard
