import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import styled from '@emotion/styled'
import CableIcon from '@mui/icons-material/Cable';
const StyledToolbar = styled(Toolbar)({
    display : "flex",
    justifyContent: "space-between"
})

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
        </StyledToolbar>     
    </AppBar>
  )
}

export default Navbar