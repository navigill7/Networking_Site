import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
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
  const [open , setOpen] = useState(false);
  return (
    <AppBar position='fixed'>  
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
              <Avatar sx={{width: 23, height: 23}} src='https://static.toiimg.com/thumb/msid-93725920,width-1280,height-720,resizemode-4/93725920.jpg'
                onClick ={(e)=> setOpen(true)}
              />
           </Icons>
           <UserBox onClick ={(e)=> setOpen(true)}>
            <Avatar sx={{width: 23, height: 23 }} src='https://static.toiimg.com/thumb/msid-93725920,width-1280,height-720,resizemode-4/93725920.jpg'
               
              />
            <Typography variant='span'>Anjali</Typography>
           </UserBox>
        </StyledToolbar>
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}

export default Navbar