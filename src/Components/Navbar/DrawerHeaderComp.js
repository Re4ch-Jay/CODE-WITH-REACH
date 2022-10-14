import { IconButton } from '@mui/material'
import React from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

function DrawerHeaderComp({DrawerHeader, handleDrawerClose, theme}) {
  return (
    <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
    </DrawerHeader>
  )
}

export default DrawerHeaderComp