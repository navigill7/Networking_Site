import { Avatar, AvatarGroup, Box, ImageList, ImageListItem, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box sx={{
      flex: 2,
      p: 2,
        display: {
            sm: "block",
            xs: "none"
        }
    }}> <Box position="fixed"><Box position="relative"  top={50} width={250}>
        <Typography variant='h6' fontWeight={100}>Connections</Typography>
        <AvatarGroup max={4}>
          <Avatar alt="Remy Sharp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx-LTfNhPEQ2jWe_vtu43ydbnQ9KTddV1Fzw&usqp=CAU" />
          <Avatar alt="Travis Howard" src="https://res.cloudinary.com/highereducation/images/w_856,h_570,c_fill,g_faces/f_auto,q_auto/v1620062574/AffordableCollegesOnline.org/GettyImages-1252473576/GettyImages-1252473576.jpg?_i=AA" />
          <Avatar alt="Cindy Baker" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4KtpCoVSfwKmhWwpBBEL6Fxq1nkXB4d6DRBnymdcpNs8nAddrttdlOpgUteJq_rw_az4&usqp=CAU" />
          <Avatar alt="Agnes Walker" src="https://miro.medium.com/v2/resize:fit:2000/0*QP76-FmcMxAbGsL1" />
          <Avatar alt="Trevor Henderson" src="https://miro.medium.com/v2/resize:fit:2000/0*QP76-FmcMxAbGsL1" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} marginTop={2} mb={2}>
          Latest Projects..
        </Typography>
        <ImageList cols={3} rowHeight={50} gap={5}>
          <ImageListItem >
            <img
             src='https://cdn.dribbble.com/userupload/11363173/file/original-4cdec4411c881f750b6911b86183834f.png?resize=400x300&vertical=center'
             alt=''
            />
          </ImageListItem>
          
          
          <ImageListItem>
            <img
              src='https://www.winklix.com/blog/wp-content/uploads/2020/09/df1facf1978a7500f4d78f8fd2b09e9c.jpg'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTXDLyUxTz9GydS9U_Lh-3qsqB5Nb4l5pA8g&usqp=CAU'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://miro.medium.com/v2/resize:fit:1400/0*kmnIdthxG6KYsFdB'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
               src='https://cdn-developer-wp.arc.dev/wp-content/uploads/2022/06/coding-programming-project-ideas-1128x635.jpg'
               alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
               src='https://pbs.twimg.com/media/E1-buqzVIAA7BY8.jpg'
               alt=''
            />
          </ImageListItem>
          
        </ImageList>
        
      </Box></Box> </Box>
  )
}

export default Rightbar