import { Box, Switch } from '@mui/material'
import React, { useContext } from 'react'
import { setThemeContext } from '../../App'
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';
function ToggleTheme() {
    const {setMode, mode} = useContext(setThemeContext)
  return (
    <Box sx={{justifyContent: 'end'}}>
        {mode === 'dark' ? <LightModeIcon sx={white}/> : <BedtimeIcon sx={white}/>}
        <Switch 
            defaultChecked
            onChange={e => setMode(mode === 'dark' ? 'light' : 'dark')} sx={white}/>
    </Box>
  )
}

export default ToggleTheme

const white = {
    color: 'white'
  }
  