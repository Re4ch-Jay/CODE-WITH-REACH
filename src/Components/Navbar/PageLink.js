import { Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function PageLink() {
  return (
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
        <Button>
            <Link className='link' to="/certifications">Certifications</Link>
        </Button>
    </Box>
  )
}

export default PageLink