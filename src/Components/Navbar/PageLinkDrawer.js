import { List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

function PageLinkDrawer({pages}) {
  return (
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
  )
}

export default PageLinkDrawer