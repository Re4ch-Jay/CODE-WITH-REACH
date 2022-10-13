import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import CodeIcon from '@mui/icons-material/Code';
import { Switch } from '@mui/material';
import { Link } from 'react-router-dom'
import BedtimeIcon from '@mui/icons-material/Bedtime';
import LightModeIcon from '@mui/icons-material/LightMode';


const white = {
  color: 'white'
}

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
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="sticky" sx={{bgcolor: 'light'}}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <CodeIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              
            >
              <MenuIcon sx={white} />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
                {pages.map((page) => (
                <MenuItem key={page.id} onClick={handleCloseNavMenu}>
                    <Link className='text-warning link' to={page.link}>
                      <Typography textAlign="center">{page.text}</Typography>
                    </Link>
                </MenuItem>
                  
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
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
            Code with Reach
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
  );
};
export default Navbar;
