import { Box } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box bgcolor="lightcoral" flex={2} p={2} sx={{
        display: {
            sm: "block",
            xs: "none"
        }
    }}>Rightbar</Box>
  )
}

export default Rightbar