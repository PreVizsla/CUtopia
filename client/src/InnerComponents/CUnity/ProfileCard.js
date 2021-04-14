import React from 'react'

import { ProfileCardWrapper, ProfileCardInfo, ProfileAvatar, PersonInfo, CUniteButton } from './ProfileCardElements'

const ProfileCard = ({avatar, name, desc}) => {
    return (
        <>
            <ProfileCardWrapper>
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
}

export default ProfileCard
