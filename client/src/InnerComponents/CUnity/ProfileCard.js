import React from 'react'

import { ProfileCardWrapper, ProfileCardInfo, ProfileAvatar, PersonInfo, CUniteButton } from './ProfileCardElements'

const ProfileCard = () => {
    return (
        <>
            <ProfileCardWrapper>
                <ProfileCardInfo>
                    <ProfileAvatar/>
                    <PersonInfo>
                        <h4>Alessandro Figo</h4>
                        <p>2nd Year CSE Student</p>
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
