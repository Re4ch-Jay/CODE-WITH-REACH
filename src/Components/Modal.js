import React from 'react'
import { Modal, Typography, List, ListItem, ListItemText } from '@mui/material'
import { Box } from '@mui/system';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import GitHub from '@mui/icons-material/GitHub';
import Instagram from '@mui/icons-material/Instagram';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    width: 400,
    height: 400,
}

const padding = {
    padding: '0 10px',
}

const blueIcon = {
    color: '#5cb3fa'
}



const cotactList = [
    {
        id: 1,
        icon: <LinkedInIcon sx={blueIcon}/>,
        link: "https://web.facebook.com/phat.panhareach/",
        account: 'Phat Panhareach',
    },
    {
        id: 2,
        icon: <FacebookIcon sx={blueIcon} />,
        link: "https://web.facebook.com/phat.panhareach/",
        account: 'Reach',
    },
    {
        id: 3,
        icon: <LocalPostOfficeIcon sx={{color: 'red'}}/>,
        link: "https://gmail.com",
        account: 'panhareach.phat@student.cadt.edu.kh',
    },
    {
        id: 4,
        icon: <GitHub sx={{color: "secondary"}} />,
        link: "https://github.com/Re4ch-Jay",
        account: 'Re4ch-Jay',
    },
    {
        id: 3,
        icon: <Instagram sx={{color: 'red'}}/>,
        link: "https://www.instagram.com/re4ch_/",
        account: 'Re4ch_',
    },
]



function ModalContact({open, setOpen}) {
  return (
    <Modal
    open={open}
    onClose={() => setOpen(false)}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
        <Box sx={style} bgcolor={'background.default'} color={'text.primary'}>
            <Typography variant='h5' textAlign="center">
                Contact Me
            </Typography>
            <List>
                {cotactList.map(item => (
                    <ListItem key={item.id}>
                        {item.icon}
                        <a href={item.link} target="_blank">
                            <ListItemText primary={item.account}sx={padding}/>
                        </a>
                    </ListItem>
                ))}
               
                
            </List>
            
            <Typography textAlign="center" padding="5px 0">
                Contact me, whenever you can!
            </Typography>   
       </Box>
    </Modal>
  )
}

export default ModalContact