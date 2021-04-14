import ImageIcon from '@material-ui/icons/CropOriginal';
import SendIcon from '@material-ui/icons/Send';
import React, {useState, useEffect} from 'react'
import FlipMove from 'react-flip-move'

import FilterListIcon from '@material-ui/icons/FilterList';
import SearchIcon from '@material-ui/icons/Search';

import bill from '../../assets/frontend-temp/bill.jpg'
import elon from '../../assets/frontend-temp/elon.jpg'
import elonPost from '../../assets/frontend-temp/elonPost.jpg'
import jeff from '../../assets/frontend-temp/jeff.jpg'
import JobsSidebar from '../Sidebars/JobsSidebar'
import MentorSidebar from '../Sidebars/MentorSidebar'
import ProfileSidebar from '../Sidebars/ProfileSidebar'
import { AttachImage, ContentQuery, ContentFormSubmit, FeedWrapper, FeedWrite, FeedWriteContent, FeedWriteHeader, FeedWriteTitle, SidebarWrapper, SubheadingText, SubheadingWrapper } from './FeedElements'
import Post from './Post';
import {Search, SearchContent, SearchHeader, SearchTitle, ContentForm, SearchSubmit, FilterIcon} from '../SearchElements'


const postListings = [
    {
        name:'Bill Gates',
        desc:'Ex-CEO at Microsoft',
        avatar:bill,
        content:'Moving to a green economy is the biggest challenge the world has ever faced. I’m optimistic we can do it, but need to make sure it benefits everyone—including those workers and communities who depend on the fossil fuels that we need to get rid of.',
        likes:29,
        comments:5,
    },
    {
        name:'Elon Musk',
        desc:'CEO at Tesla & SpaceX',
        avatar:elon,
        content:"Hello there CUHK students! We are currently opening up a few opportunities for engineering internships here in both SpaceX and Tesla! CUnite with me and send me a message with your CV if you're interested!",
        image:elonPost,
        likes:79,
        comments:18,
    },
    {
        name:'Jeff Bezos',
        desc:'CEO at Amazon',
        avatar:jeff,
        content:'Damn! CUtopia is a very cool site. I think this project should get an A!',
        likes:57,
        comments:9
    }
]

const Feed = () => {    
    
    const [postContent, setPostContent] = useState("")

    const handleSubmit = () =>{
        console.log('component state is: ', JSON.stringify(postContent))
        setPostContent("")
    }
    const handleAddPost = e => {
        setPostContent(e.target.value)
    }
    const [searchQuery, setSearchQuery] = useState("")
    const [searchResults, setSearchResults] = useState([])

    const handleSearch = e => {
        setSearchQuery(e.target.value)
    }

    useEffect(() => {
        const filtered = postListings.filter(post =>
            post.content.toLowerCase().includes(searchQuery)
        )
        setSearchResults(filtered)
    }, [searchQuery])

    return (
        <>
            {/* Left side of Feed page, allowing users to write and see posts */}
            <FeedWrapper>
                <FeedWrite>
                    <FeedWriteHeader>
                        <FeedWriteTitle>NEW POST</FeedWriteTitle>
                    </FeedWriteHeader>
                    <FeedWriteContent>
                        <ContentQuery placeholder="What's on your mind?" type='text' value={postContent} onChange={handleAddPost}/>
                        <AttachImage>
                            <ImageIcon />
                        </AttachImage>

                        <ContentFormSubmit>
                            <button onClick={handleSubmit} style={{outline:"none", backgroundColor:"white", border:"none", cursor:"pointer", color:"#DDA300"}}>
                            <SendIcon />
                            </button>
                        </ContentFormSubmit>

                    </FeedWriteContent>
                </FeedWrite>
                
                <SubheadingWrapper>
                    <SubheadingText><h3>FIND POSTS</h3></SubheadingText>
                </SubheadingWrapper>
                {/*Allows users to create an entry for a NEW POST*/}
                <Search>
                    <SearchHeader>
                        <SearchTitle>CHECK OUT WHAT OTHERS ARE UP TO</SearchTitle>
                    </SearchHeader>
                    <SearchContent>
                        <ContentForm value={searchQuery} onChange={handleSearch} placeholder="Search Posts" type='text'/>
                        <FilterIcon>
                            <FilterListIcon />
                        </FilterIcon>
                        <SearchSubmit>
                            <SearchIcon />
                        </SearchSubmit>
                    </SearchContent>
                </Search>
                {/* POSTS FOR YOU divider between post creation and reading existing ones */}
                <SubheadingWrapper>
                    <SubheadingText><h3>POSTS FOR YOU</h3></SubheadingText>
                </SubheadingWrapper>
                {/* Individual Posts */}
                <FlipMove>
                {searchResults.map((data)=>{
                    return <Post
                        name={data.name}
                        desc={data.desc}
                        avatar={data.avatar}
                        content={data.content}
                        image={data.image}
                        likes={data.likes}
                        comments={data.comments}
                    />
                })}
                </FlipMove>
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
