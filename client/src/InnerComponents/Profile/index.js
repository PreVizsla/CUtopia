import React, { useState } from 'react'
import CloseIcon from '@material-ui/icons/Close';
import AddIcon from '@material-ui/icons/Add';
import GOOGLE from '../../assets/frontend-temp/Google-logo.jpg'
import FACEBOOK from '../../assets/frontend-temp/Facebook-logo.png'
import CUHK from '../../assets/frontend-temp/CUHK.png'
import IPEKA from '../../assets/frontend-temp/IPEKA.png'
import JobsSidebar from '../Sidebars/JobsSidebar'
import MentorSidebar from '../Sidebars/MentorSidebar'
import ProfileSection from './ProfileSection'
import { RemoveItem, RemoveContainer, AddItem, InformationContainer, Header, Logo, InfoSection, Description, ProfileData, Section, AboutContent, SectionHeader, SectionTitle, SidebarWrapper } from './ProfileElements'
import AddEduPopup from  './AddEducation/AddEduPopup'
import AddEduForm from './AddEducation/AddEduForm'

//this is the template variable for user to add their education
export const education_template = {
    school:'',
    degree:'',
    year:'',
    description:'',
    image: CUHK,
    visible: true,
}

//this is the template variable for user to add their experience
export const experience_template = {
    title:'',
    company:'',
    start_year:'',
    end_year:'',
    description:'',
    image: FACEBOOK,
    visible: true,
}

//this is the initial education data of the profile
export const education = 
[
    {
        school:'The Chinese University of Hong Kong',
        degree:'Bachelor\'s degree of Computer Science',
        start_year:'2012',
        end_year:'2016',
        description:'Additional Data Science and Machine Learning Courses ',
        image: CUHK,
        visible: true,
    },
    {
        school:'Sekolah Kristen IPEKA Pluit',
        degree:'High school diploma',
        start_year:'2006',
        end_year:'2012',
        description:'Good high school',
        image: IPEKA,
        visible: true,
    }
]

//this is the initial experience data of the profile
export const experience = [
    {
        title:'Software Engineer',
        company:'Google',
        start_year:'2018',
        end_year:'2019',
        description:'Additional Data Science and Machine Learning Courses ',
        image: GOOGLE,
        visible: true,
    },
    {
        title:'Back-end Engineer',
        company:'Facebook',
        start_year:'2007',
        end_year:'2018',
        description:'Good high school',
        image: FACEBOOK,
        visible: true,
    }
]

//this is the initial about data of the profile
const About = {
    about:'I am more experienced in eCommerce web projects and mobile banking apps, but also like to work with creative projects, such as landing pages or unusual corporate websites',
    education_count: 1,
}

const Profile = () => {

    //this will be used for indicating the success of adding or deleting education
    const [TEST, setTEST] = useState(true);

    //function for handling the delete education button
    const deleteEvent = (values, index)=>{
        values.visible=false;
        education.splice(index, 1);
        setTEST(false);
        console.log('component state is: ', JSON.stringify(education) )
     }
     
    //function for handling the delete experience button
     const deleteExp = (values, index)=>{
        values.visible=false;
        experience.splice(index, 1);
        setTEST(false);
        console.log('component state is: ', JSON.stringify(experience) )
      
     }

    //this is for handling open popup trigger
    const [openPopupAddEdu, setOpenPopupAddEdu] = useState(false);

    //this is for handling if the edit profile form is submitted or no
    const [isSubmittedProfileForm, ProfileFormIsSubmitted] = useState(false);

    //this is if the add education form submission is a success
    function setSubmitTrue() {
        //to triggers to shut the form
        ProfileFormIsSubmitted(true);
        setOpenPopupAddEdu(!openPopupAddEdu);
        //to make it back to the initial value of false
        ProfileFormIsSubmitted(false);
        education.push(education_template);
    }

    return (
        <>                
            {/* Left side of Feed page, allowing users to write and see posts */}
            <ProfileData>

                {/* Allows users to create an entry for a NEW POST */}
                <ProfileSection />  
                <Section>
                    <SectionHeader>
                        <SectionTitle>About</SectionTitle>
                    </SectionHeader>
                    <AboutContent>
                        <Description>{About.about}</Description> 
                    </AboutContent>
                </Section>
                {TEST? (
                    <>
                    {/* education section */}
                    {education.length > 0?(
                    <>
                    <Section>
                        <SectionHeader>
                            <SectionTitle>Education</SectionTitle>
                            <AddItem onClick = {() => setOpenPopupAddEdu(true)}>
                                <AddIcon/>
                            </AddItem>
                        </SectionHeader>

                        {/* iterating through the education data */}
                        <AboutContent>   
                            {/* looping through the dataset */}                         
                            {education.map((values,index) => (
                                <>
                                {values.visible ? (
                                    <InformationContainer >
                                    {/* school icon */}
                                    <Logo src={values.image}/>
                                    <InfoSection key={index}>
                                        <Header>{values.school}</Header> 
                                        <Description>{values.degree}</Description> 
                                        <Description>{values.start_year} - {values.end_year}</Description>    
                                        <Description>{values.description}</Description>  
                                    </InfoSection>
                                    <RemoveContainer>
                                        {/* clicking the button will pass the value of the data at the certain index of the array */}
                                       <RemoveItem onClick={() => deleteEvent(values, index)}>
                                            <CloseIcon/>
                                        </RemoveItem>
                                    </RemoveContainer>
                                    </InformationContainer>
                                    
                                ):(
                                    <div></div>
                                )}

                                </>
                            ))}
                        </AboutContent>
                    </Section>
                    </>
                ):(
                    // if there is no education, then it will show blank section       
                    <></>
                )}
                </>
                ):(
                    setTEST(true)
                )}

                {TEST?(
                <>
                {/* experience section */}
                {experience.length > 0?(
                <Section>
                    <SectionHeader>
                        <SectionTitle>Experience</SectionTitle>
                    </SectionHeader>

                    {/* iterating through the experience data */}
                    <AboutContent>
                        
                        {/* looping through the dataset */}
                        {experience.map((values,index) => (
                            <>
                            {values.visible ? (
                            <InformationContainer>
                            {/* Company icon */}
                            <Logo src={values.image}/>
                            <InfoSection key={index}>
                                <Header>{values.title}</Header> 
                                <Description>{values.company}</Description> 
                                <Description>{values.start_year} - {values.end_year}</Description>    
                                <Description>{values.description}</Description>  
                            </InfoSection>
                            <RemoveContainer>
                                {/*<RemoveItem onClick={() =>{values.visible=false}}> */}
                                {/* <RemoveItem onClick={() => deleteEvent.bind(index)}> */}
                                <RemoveItem onClick={() => deleteExp(values, index)}>
                                    <CloseIcon/>
                                </RemoveItem>
                            </RemoveContainer>
                            </InformationContainer>
                            ):(
                                <div></div>
                            )}
                            </>
                        ))}
                    </AboutContent>
                </Section>
                ):(
                    // if there is no experience, then it will show blank section 
                    <></>
                )}
                </>
                ):(
                    setTEST(true)
                )}
            </ProfileData>
            {/* Right side of Feed page, filled with 3 items: Personal profile info, Mentor suggestions, Job suggestions */}
            <SidebarWrapper>
                {/* Mentor Suggestions */}
                <MentorSidebar />
                {/* Job Suggestions */}
                <JobsSidebar />
            </SidebarWrapper>
            {/* add education popup */}
            <AddEduPopup 
                openPopup = {openPopupAddEdu}
                setOpenPopup = {setOpenPopupAddEdu}
            >
              {!isSubmittedProfileForm ?(
                <AddEduForm submitFormLogin={setSubmitTrue}/>
              ):(
                <></>
              )}
            </AddEduPopup>
        </>
    )
}

export default Profile
