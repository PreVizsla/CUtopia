import React, { useState }  from 'react'
import PublishIcon from '@material-ui/icons/Publish';
import EditIcon from '@material-ui/icons/Edit';
import clement from '../../../assets/frontend-temp/clement.jpg'
import Background from '../../../assets/images/profileBG.jpg'
import { EditButtonText, ProfileIcon, ProfileInfo, CountryInfo, MainProfile, InformationContainer, EditButton, UploadButton, ProfileBackground, IconContainers, ContactButton } from './ProfileSectionElements'
import { makeStyles } from "@material-ui/core/styles";
import ProfileForm from "./ProfileForm"


import Popup from  './popup'

//this is for the material UI styling
const useStyles = makeStyles((theme) => ({
  upload: {
    fontSize: "45px",
  },  edit: {
    marginLeft:"10px",
    fontSize: "25px",
  }, 
}));

//this is for the initial profile data of the user
export const Intro = {
    picture: clement,
    name:'Clement Mihaiescu (克莱门特)',
    city:'Hong Kong',
    country:'Hong Kong SAR',
    info: 'Software Engineer at Swahili with over 2000 projects Founder and CEO at AlgoExpert.io',
    major: 'CSCIN'
}

const ProfileSection = () => {

    const [openPopup, setOpenPopup] = useState(false);
    const classes = useStyles();

    //check if it the edit profile is submitted or not
    const [isSubmittedProfileForm, LoginIsSubmitted] = useState(false);
    function setSubmitTrue() {
      LoginIsSubmitted(true);
      setOpenPopup(!openPopup);
      LoginIsSubmitted(false);
    }

    return (
        <>
            {/* Personal Profile info consists of: CUtopia background, Profile avatar, and Profile Info */}
            <MainProfile>
                {/* CUtopia background */}
                <ProfileBackground style={{backgroundImage:"url(" + { Background } + ")"}} alt="">
                    <IconContainers>
                        {/* button to upload background picture */}
                        <UploadButton><PublishIcon className={classes.upload}/></UploadButton>
                        {/* the edit profile button that will trigger the popup */}
                        <EditButton onClick = {() => setOpenPopup(true)}>
                            <EditIcon className={classes.edit}/>
                            <EditButtonText>Edit Profile </EditButtonText>
                        </EditButton>
                    </IconContainers>
                    
                </ProfileBackground>
                {/* Containing the bottom half of the profile section */}
                <InformationContainer>
                    {/* Profile Avatar */}
                    <ProfileIcon src={Intro.picture}/>
                    {/* Profile Info */}
                    <ProfileInfo>
                        <h2>{Intro.name}</h2>
                        <h4 style={{marginBottom:"5px", fontWeight:"600"}}>{Intro.major} major</h4>
                        <h4>{Intro.info}</h4>

                    <ContactButton >
                        CONTACT ME
                    </ContactButton>
                    </ProfileInfo>
                    <CountryInfo>
                        <h4>{Intro.city}, {Intro.country}</h4>
                    </CountryInfo>
                </InformationContainer>

            </MainProfile>
            {/* the popup component ready to be triggered */}
            <Popup 
                openPopup = {openPopup}
                setOpenPopup = {setOpenPopup}
            >
              {!isSubmittedProfileForm ?(
                <ProfileForm submitFormLogin={setSubmitTrue}/>
              ):(
                <></>
              )}
            </Popup>
        </>
    )
}

export default ProfileSection
