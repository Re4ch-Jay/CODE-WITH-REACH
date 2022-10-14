import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@emotion/react';
import styled from '@emotion/styled';
import LogoBig from './LogoBig';
import LogoSmall from './LogoSmall';
import PageLink from './PageLink';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ToggleTheme from './ToggleTheme';
import MenuIconComp from './MenuIconComp';
import PageLinkDrawer from './PageLinkDrawer';
import DrawerHeaderComp from './DrawerHeaderComp';

const Navbar = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);
    const handleDrawerOpen = () => setOpen(true);
    const handleDrawerClose = () => setOpen(false);


  return (
    <Box>
      <AppBar position='sticky' sx={{bgcolor: 'light'}} component='nav'>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <LogoBig/>
            <MenuIconComp white={white} handleDrawerOpen={handleDrawerOpen}/>
            <LogoSmall/>
            <PageLink/>
            <ToggleTheme/>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer sx={StyleDrawer} variant="persistent" anchor="left" open={open}>
            <DrawerHeaderComp handleDrawerClose={handleDrawerClose} theme={theme} DrawerHeader={DrawerHeader}/>
            <Divider />
            <PageLinkDrawer pages={pages}/>
      </Drawer>
    </Box>
  );
};
export default Navbar;


const white = {
  color: 'white'
}

const drawerWidth = 240;

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

const StyleDrawer = {
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
    boxSizing: 'border-box',
  },
}

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
