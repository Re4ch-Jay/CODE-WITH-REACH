import React from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
import { Typography } from '@mui/material'

function LogoSmall() {
  return (
    <Typography
    variant="h5"
    noWrap
    component="p"
    sx={{
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        color: 'white',
        textDecoration: 'none',
        fontSize: 18,  
    }}
    >
        <motion.div 
        initial={{y: -200}}
        animate={{y: 0}}
        transition={{duration: 0.5}}
        >
        Code with Reach
        </motion.div>
    </Typography>
  )
}

export default LogoSmall