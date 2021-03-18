import { Avatar } from '@material-ui/core'
import styled from 'styled-components'

export const SidebarProfile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    height: fit-content;
    border-radius: 10px 10px 5px 5px;
    margin-bottom: 30px;


    > img {
        width: 100%;
        height: 120px;
        object-fit: cover;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        margin-bottom: -45px;
    }
`

export const ProfileIcon = styled(Avatar)`
    margin-bottom: 10px;
    height: 90px !important;
    width: 90px !important;
    box-shadow: 0px 0px 0px 7px #fff;
`

export const ProfileInfo = styled.div`
    margin-top: 5px;
    margin-bottom: 25px;
    text-align: center;

    > h2 {
        max-width: 100%;
        font-weight: 700;
        font-size: 16px;
    }

    > h4 {
        max-width: 100%;
        font-weight: 500;
        font-size: 14px;
    }

    > p {
        margin-top: 5px;
        padding-left: 40px;
        padding-right: 40px;
        font-weight: 400;
        font-size: 12px;
    }
`