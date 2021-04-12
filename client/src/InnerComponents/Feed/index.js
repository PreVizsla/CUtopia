import ImageIcon from '@material-ui/icons/CropOriginal';
import SendIcon from '@material-ui/icons/Send';
import React from 'react'

import bill from '../../assets/frontend-temp/bill.jpg'
import elon from '../../assets/frontend-temp/elon.jpg'
import elonPost from '../../assets/frontend-temp/elonPost.jpg'
import jeff from '../../assets/frontend-temp/jeff.jpg'
import JobsSidebar from '../Sidebars/JobsSidebar'
import MentorSidebar from '../Sidebars/MentorSidebar'
import ProfileSidebar from '../Sidebars/ProfileSidebar'
import { AttachImage, ContentForm, ContentFormSubmit, FeedWrapper, FeedWrite, FeedWriteContent, FeedWriteHeader, FeedWriteTitle, SidebarWrapper, SubheadingText, SubheadingWrapper } from './FeedElements'
import Post from './Post';

const Feed = () => {
    return (
        <>
            {/* Left side of Feed page, allowing users to write and see posts */}
            <FeedWrapper>
                {/*Allows users to create an entry for a NEW POST*/}
                <FeedWrite>
                    <FeedWriteHeader>
                        <FeedWriteTitle>NEW POST</FeedWriteTitle>
                    </FeedWriteHeader>
                    <FeedWriteContent>
                        <ContentForm placeholder="What's on your mind?" type='text'/>
                        <AttachImage>
                            <ImageIcon />
                        </AttachImage>
                        <ContentFormSubmit>
                            <SendIcon />
                        </ContentFormSubmit>
                    </FeedWriteContent>
                </FeedWrite>
                {/* POSTS FOR YOU divider between post creation and reading existing ones */}
                <SubheadingWrapper>
                    <SubheadingText><h3>POSTS FOR YOU</h3></SubheadingText>
                </SubheadingWrapper>
                {/* Individual Posts */}
                <Post
                    name='Bill Gates'
                    desc='Ex-CEO at Microsoft'
                    avatar={bill}
                    content='Moving to a green economy is the biggest challenge the world has ever faced. I’m optimistic we can do it, but need to make sure it benefits everyone—including those workers and communities who depend on the fossil fuels that we need to get rid of.'
                    likes={29}
                    comments={5}
                />
                <Post
                    name='Elon Musk'
                    desc='CEO at Tesla & SpaceX'
                    avatar={elon}
                    content="Hello there CUHK students! We are currently opening up a few opportunities for engineering internships here in both SpaceX and Tesla! CUnite with me and send me a message with your CV if you're interested!"
                    image={elonPost}
                    likes={79}
                    comments={18}
                />
                <Post
                    name='Jeff Bezos'
                    desc='CEO at Amazon'
                    avatar={jeff}
                    content='Damn! CUtopia is a very cool site. I think this project should get an A!'
                    likes={57}
                    comments={9}
                />
            </FeedWrapper>
            {/* Right side of Feed page, filled with 3 items: Personal profile info, Mentor suggestions, Job suggestions */}
            <SidebarWrapper>
                {/* Personal Profile Info */}
                <ProfileSidebar />       
                {/* Mentor Suggestions */}
                <MentorSidebar />
                {/* Job Suggestions */}
                <JobsSidebar />
            </SidebarWrapper>
        </>
    )
}

export default Feed
