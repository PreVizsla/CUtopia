import styled from 'styled-components'
import { Avatar } from '@material-ui/core'

export const ChatPersonContainer = styled.div`
    display: flex;
    align-items: center;
    cursor: pointer;
    word-break: break;
    height: 90px;
    border-bottom: 2px solid #f3f3f3;

    :hover {
        background-color: #e9eaeb;
    }
`

export const UserAvatar = styled(Avatar)`
    margin-left: 18px;
    margin-right: 15px;
    height: 52px !important;
    width: 52px !important;
`

export const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 200px;
    padding-right: 20px;

    > h1 {
        margin-top: auto;
        font-size: 15px;
        font-weight: 700;
        margin-bottom: 7px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    > h3 {
        font-size: 12px;
        font-weight: 400;
        margin-bottom: auto;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`