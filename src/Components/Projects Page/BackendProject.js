import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'


function BackendProject({item, yellow}) {
  return (
    <Card sx={{ maxWidth: "100%", margin: '20px 0'}} component="li">
        <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.image}
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div"  sx={yellow}>
            {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            ...{item.content.slice(-200)}...
        </Typography>
        </CardContent>
        <CardActions>
        <Link to={`/projects/${item.id}`}>
            <Button size="small">Read more</Button>
        </Link>
            <a href={item.link} target="_blank">
            <Button size="small">github</Button>
            </a>
        </CardActions>
    </Card> 
  )
}

export default BackendProject