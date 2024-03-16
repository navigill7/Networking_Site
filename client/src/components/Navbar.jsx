import { AppBar, Avatar, Badge, Box, InputBase, Toolbar, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import MessageIcon from '@mui/icons-material/Message';
import CableIcon from '@mui/icons-material/Cable';
import theme from "../theme.js"
import { Breakpoint } from '@mui/material';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
const StyledToolbar = styled(Toolbar)({
    display : "flex",
    justifyContent: "space-between"
})
const Search = styled("div")(({theme}) =>({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "5px",
  width: "30%"
  
}))

const Icons = styled(Box)(({theme}) =>({
  display: 'none',
  justifyContent: "space-evenly",
  gap: "15px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "flex"
  }
}))
const UserBox = styled(Box)(({theme}) =>({
  display: 'flex',
  justifyContent: "space-evenly",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]:{
    display: "none"
  }

}))


const Navbar = () => {
  return (
    <AppBar position='stick'>  
        <StyledToolbar >
           <Typography variant='h6' sx={{
            display:{
                xs: "none",
                sm: "block"
            }
            
           }}> UNI-LINK</Typography>
           <CableIcon sx={{display:{xs:"block" , sm: "none"}}}/>
           <Search><InputBase placeholder='Search...'/></Search>
           <Icons><Badge badgeContent={4} color='error' > <MessageIcon /> </Badge>
              <Badge badgeContent={2}  color='error' > <CircleNotificationsIcon/> </Badge>
              <Avatar sx={{width: 23, height: 23}} src='https://static.toiimg.com/thumb/msid-93725920,width-1280,height-720,resizemode-4/93725920.jpg'/>
           </Icons>
           <UserBox>
            <Avatar sx={{width: 23, height: 23 }} src='https://static.toiimg.com/thumb/msid-93725920,width-1280,height-720,resizemode-4/93725920.jpg'/>
            <Typography variant='span'>Anjali</Typography>
           </UserBox>
        </StyledToolbar>     
    </AppBar>
  )
}

export default Navbar