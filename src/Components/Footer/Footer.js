import React from "react";

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import HomeIcon from '@mui/icons-material/Home';
import Home from "@mui/icons-material/Home";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

const iconLink = [
  {
    link: 'https://web.facebook.com/phat.panhareach/',
    icon: <FacebookIcon sx={{color: '#4091f5', fontSize: 35, margin: '0 20px', }}/>,
    id: 1,
  },
  {
    link: 'https://www.instagram.com/re4ch_/',
    icon: <InstagramIcon sx={{color: 'red', fontSize: 35, margin: '0 20px', }}/>,
    id: 2,
  },
  {
    link: 'https://github.com/Re4ch-Jay',
    icon: <GitHubIcon sx={{color: 'black', fontSize: 35, margin: '0 20px', }}/>,
    id: 3,
  },
]

const Footer = () => {
  return (
    <div className="footer text-center py-5">
      <div className="pb-4 text-white">Copy Right @codewithreach</div>
      <div className="text-white">
        <div className="f-icons">
          {iconLink.map(item => (
            <a href={item.link} key={item.id}>
              {item.icon}
            </a>
          ))}
        </div>
        <div className="text-white">
          <Stack direction='row' justifyContent='center' sx={{padding: '20px 0px'}} >
            <Home/>
            <Typography justifyContent='center' sx={{padding: '0px 10px'}}>Phnom Penh, Cambodia</Typography>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Footer;