import { Typography } from '@mui/material'
import React from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
import CodeIcon from '@mui/icons-material/Code';
function LogoBig() {
  return (
    <>
    <motion.div
          initial={{y: -200}}
          animate={{y: 0}}
          ><CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
          </motion.div>
    <motion.div
    initial={{y: -200}}
    animate={{y: 0}}
    >
        <Typography
            variant="h6"
            noWrap
            sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'white',
            textDecoration: 'none',
            }} 
            >
        Code with Reach
        </Typography>
    </motion.div>
    </>
  )
}

export default LogoBig