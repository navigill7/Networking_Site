import React from 'react'
import MoreVert from '@mui/icons-material/MoreVert'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'
import ShareRoundedIcon from '@mui/icons-material/ShareRounded';
//import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import FavoriteBorderRounded from '@mui/icons-material/FavoriteBorderRounded';
import Favorite from '@mui/icons-material/Favorite';

const Post = () => {
  return (
    <div>
        <Card sx={{margin: 5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Uday Bansal"
        subheader="March 16, 2024"
      />
      <CardMedia
        component="img"
        height="20%"
        image='https://res.cloudinary.com/highereducation/images/w_2560,h_1440/w_424,h_250,c_fill,f_auto,fl_lossy,q_auto/v1670015316/BestColleges.com/closeup-of-python-code/closeup-of-python-code.jpg'
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
        "Exciting news! 🎉 Our backend development is officially complete! With meticulous planning and dedicated effort, our team has successfully built the foundation of our application's functionality. 
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorderRounded/>} checkedIcon={<Favorite sx={{color: "red"}}/>} ></Checkbox>
        </IconButton>
        <IconButton aria-label="share">
          <ShareRoundedIcon/>
        </IconButton>
        
      </CardActions>
     
    </Card>
    </div>
  )
}

export default Post