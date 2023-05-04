import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption.js';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import './Sidebar.css';
import Button from '@mui/material/Button';
function Sidebar() {
  return (
    <div className="sidebar">
     <TwitterIcon className='sidebar__twitterIcon'/> 
     <SidebarOption active Icon={HomeIcon} text='Home'></SidebarOption>
     <SidebarOption Icon={SearchIcon} text='Explore'></SidebarOption>
     <SidebarOption Icon={NotificationsNoneIcon} text='Notification'></SidebarOption>
     <SidebarOption Icon={MailOutlineIcon} text='Messages'></SidebarOption>
     <SidebarOption Icon={BookmarkBorderIcon} text='Bookmarks'></SidebarOption>
     <SidebarOption Icon={ListAltIcon} text='Lists'></SidebarOption>
     <SidebarOption Icon={PermIdentityIcon} text='Profile'></SidebarOption>
     <SidebarOption Icon={MoreHorizIcon} text='More'></SidebarOption>
     <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button> 
    </div>
  )
}

export default Sidebar
