import ChatIcon from '@material-ui/icons/ChatBubbleOutline'
import ShareIcon from '@material-ui/icons/ShareOutlined'
import LikeIcon from '@material-ui/icons/ThumbUpAltOutlined'
import React from 'react'

import { ActionButton, FeedPost, FeedPostBottom, FeedPostProfileInfo, FeedPostTop, PostAuthor, PostAvatar, PostBottomLeft, PostBottomRight, PostContent, PostImageWrapper } from './PostElements'

const Post = ({avatar, name, desc, content, image, likes, comments}) => {
    return (
        <>
            {/* Post broken down to two parts, top and bottom */}
            <FeedPost>
                {/* Top part consists of: Author details and post content */}
                <FeedPostTop>
                    {/* Author Details */}
                    <FeedPostProfileInfo>
                        {/* Avatar of post author */}
                        <PostAvatar src={avatar}/>
                        {/* Name and Position of author */}
                        <PostAuthor>
                            <h4>{name}</h4>
                            <p>{desc}</p>
                        </PostAuthor>
                    </FeedPostProfileInfo>
                    {/* Text content of post */}
                    <PostContent>
                        {content}
                    </PostContent>
                    {/* If an image exists, also render image */}
                    {image &&
                        <PostImageWrapper>
                            <img src={image} alt=''/>
                        </PostImageWrapper>
                    }
                </FeedPostTop>
                {/* Bottom part consists of no. of likes, comments and also the share button */}
                <FeedPostBottom>
                    {/* Bottom part broken to two sections: left and right */}
                    {/* Left consists of No. of likes and No. of comments */}
                    <PostBottomLeft>
                        {/* Like button */}
                        <ActionButton left={true}>
                            <LikeIcon style={{fill: '#DDA300'}}/>
                            <h4>{likes}</h4>
                        </ActionButton>
                        {/* Comment Button */}
                        <ActionButton left={true}>
                            <ChatIcon style={{fill: '#DDA300'}}/>
                            <h4>{comments}</h4>
                        </ActionButton>
                    </PostBottomLeft>
                    {/* Right consists of share button */}
                    <PostBottomRight>
                        {/* Share Button */}
                        <ActionButton left={false}>
                            <ShareIcon style={{fill: '#DDA300'}}/>
                            <h4>SHARE</h4>
                        </ActionButton>
                    </PostBottomRight>
                </FeedPostBottom>
            </FeedPost>
        </>
    )
}

export default Post
