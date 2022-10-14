import { Box, IconButton } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function MenuIconComp({handleDrawerOpen, white}) {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleDrawerOpen}
        
        >
        <MenuIcon sx={white} />
        </IconButton>
    </Box>
  )
}

export default MenuIconComp