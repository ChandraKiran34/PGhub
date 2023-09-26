import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

export const SidebarData = [
    {
        title:"Home",
        icon:<HomeIcon />,
        link:"/"
   },
    {
         title:"Dashboard",
         icon:<DashboardIcon />,
         link:"/dashboard"
    },
    {
         title:"Messages",
         icon:<ChatBubbleIcon/>,
         link:"/messages"
    },
    {
         title:"submissionSynop",
         icon:<NoteAddIcon />,
         link:"/submission"
    },
    {
         title:"Profile",
         icon:<AccountBoxIcon />,
         link:"/profile"
    }
]