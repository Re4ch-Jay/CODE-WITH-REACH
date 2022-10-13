import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Language from '../Language Icons/Language';

const padding = {
  padding: "10px 0"
}

function Blogs() {
  return (
    <section className='container-fluid'>
        <div className="text-center text-warning py-5">
            <h1>All Blogs</h1>
            <p className='text-muted'>Explore my blogs here, about my road map to learn those technologies</p>
        </div>
      <Container>
        <Stack 
        sx={padding}
        direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row'}}
        spacing={{ xs: 1, sm: 2, md: 2, lg: 4 }}
        alignItems="center"
        justifyContent="space-around">
        {blogList1.map(item => (
            <Card sx={{ maxWidth: 345 }} key={item.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {item.body}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        ))}
        </Stack>
        <Stack 
        sx={padding}
        direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row'}}
        spacing={{ xs: 1, sm: 2, md: 2, lg: 4 }}
        alignItems="center"
        justifyContent="space-around">
        {blogList2.map(item => (
            <Card sx={{ maxWidth: 345 }} key={item.id}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={item.image}
                  alt={item.image}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  {item.body}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
        ))}
        </Stack>
        <div className='pt-5'>
          <Language/>
        </div>
      </Container>
      
    </section>
  )
}

export default Blogs



const blogList1 = [
  {
    id: 1,
    image: '1.png',
    title: 'ReactJS',
    body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    id: 2,
    image: '2.png',
    title: 'JavaScript',
    body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    id: 3,
    image: '5.png',
    title: 'NodeJS',
    body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  
  
]

const blogList2 = [
  {
    id: 1,
    image: '8.png',
    title: 'Boostrap',
    body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    id: 2,
    image: '9.png',
    title: 'JavaScript',
    body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  {
    id: 3,
    image: '7.png',
    title: 'NodeJS',
    body: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
  },
  
  
]