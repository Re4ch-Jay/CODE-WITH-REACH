import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function MobileProject({item, yellow}) {
  return (
    <Card sx={{ maxWidth: "100%", margin: '20px 0'}} component="li">
        <CardMedia
        component="img"
        height="140"
        image={item.image}
        alt={item.image}
        margin="0 auto" 
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div"  sx={yellow}>
            {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {item.content.slice(-200)}
        </Typography>
        </CardContent>
        <CardActions>
        
            <a href={item.link} target="_blank">
            <Button size="small">{item.view}</Button>
            </a>
        </CardActions>
    </Card> 
  )
}

export default MobileProject