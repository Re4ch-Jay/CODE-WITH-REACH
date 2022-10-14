import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CodeIcon from '@mui/icons-material/Code';
import { Switch } from '@mui/material';
import { Link } from 'react-router-dom'
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import {motion} from 'framer-motion/dist/framer-motion'

const white = {
  color: 'white'
}


const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const pages = [
  {
    text: 'Home',
    link: '/',
    id: 1,
  },
  {
    text: 'Blogs',
    link: '/blogs',
    id: 2
  },
  {
    text: 'Projects',
    link: '/projects',
    id: 3
  },
]

const Navbar = ({setMode, mode}) => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };


  return (
    <Box>
    <AppBar position='sticky' sx={{bgcolor: 'light'}} component='nav'>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <motion.div
          initial={{y: -200}}
          animate={{y: 0}}
          
          ><CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} /></motion.div>
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
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} >
            <Button>
              <Link className='link' to="/">Home</Link>
            </Button>
            <Button>
              <Link className='link' to="/blogs">Blogs</Link>
            </Button>
            <Button>
              <Link className='link' to="/projects">Projects</Link>
            </Button>
          </Box>
          <Box sx={{justifyContent: 'end'}}>
              {mode === 'dark' ? <LightModeIcon sx={white}/> : <BedtimeIcon sx={white}/>}
              
              <Switch defaultChecked  onChange={e => setMode(mode === 'dark' ? 'light' : 'dark')} sx={{color:"white"}}/>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
      <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {pages.map(item => (
              <ListItem key={item.id} disablePadding components="div">
                <Link to={item.link}>
                  <ListItemButton components='div'>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </Link>
              </ListItem>
            ))}
          </List>
      </Drawer>
        
    </Box>
  );
};
export default Navbar;

