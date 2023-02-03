import { Button, List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function PageLinkDrawer({pages}) {
  return (
    <List>
        {pages.map(item => (
        <List key={item.id} disablePadding components="div">
            <Link to={item.link} className="link">
            <Button components='div'>
                <ListItemText primary={item.text} components="div"/>
            </Button>
            </Link>
        </List>
        ))}
    </List>
  )
}

export default PageLinkDrawer