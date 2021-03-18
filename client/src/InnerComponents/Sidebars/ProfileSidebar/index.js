import React from 'react'

import clement from '../../../assets/frontend-temp/clement.jpg'
import profileBackground from '../../../assets/images/profileBG.jpg'
import { ProfileIcon, ProfileInfo, SidebarProfile } from './ProfileSidebarElements'

const ProfileSidebar = () => {
    return (
        <>
            {/* Personal Profile info consists of: CUtopia background, Profile avatar, and Profile Info */}
            <SidebarProfile>
                {/* CUtopia background */}
                <img src={profileBackground} alt=""/>
                {/* Profile Avatar */}
                <ProfileIcon src={clement}/>
                {/* Profile Info */}
                <ProfileInfo>
                    <h2>Clement Mihaiescu</h2>
                    <h4>clem@algoexpert.io</h4>
                    <p>Founder and CEO at AlgoExpert.io</p>
                </ProfileInfo>
            </SidebarProfile>
        </>
    )
}

export default ProfileSidebar
