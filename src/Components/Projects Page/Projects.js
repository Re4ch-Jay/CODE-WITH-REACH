import React from 'react'
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ProjectHero from './ProjectHero';
import Language from '../Language Icons/Language';


function Projects() {
  return (
    <section className='container-fluid'>
        <ProjectHero/>
        <div className="text-center text-warning pt-5">
            <h1>All Projects</h1>
            <p className='text-muted'>Projects & Web I've Created</p>
        </div>
       <div className="text-center img-list pb-5">
        
       <Stack  
          direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row'}}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {projectItems.map(item => (
                <div className='m-2 project-card' key={item.id}>
                  <Card  sx={{ maxWidth: "100%", margin: '20px 0'}}>
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
                          {item.content}
                        </Typography>
                      </CardContent>
                      <CardActions>
                      <Link to={`/projects/${item.id}`}>
                          <Button size="small">Read more</Button>
                      </Link>
                        <a href="https://github.com/Re4ch-Jay/React-Facebook-MUI" target="_blank">
                          <Button size="small">github</Button>
                        </a>
                      </CardActions>
                    </CardActionArea>
                  </Card> 
                </div>
              
            ))}
        </Stack>
        <Stack  
          direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row'}}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {projectItems2.map(item => (
                <div className='m-2 project-card' key={item.id}>
                  <Card  sx={{ maxWidth: "100%", margin: '20px 0'}}>
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
                          {item.content}
                        </Typography>
                      </CardContent>
                      <CardActions>
                      <Link to={`/projects/${item.id}`}>
                          <Button size="small">Read more</Button>
                      </Link>
                        <a href="https://github.com/Re4ch-Jay/React-Facebook-MUI" target='_blank'>
                          <Button size="small">github</Button>
                        </a>
                      </CardActions>
                    </CardActionArea>
                  </Card> 
                </div>
              
            ))}
        </Stack>
        <div className="text-center text-warning py-5">
                <h4>Language & Framework</h4>
                <p className='text-muted'>That included in those projects</p>
            </div>
        <Language/>
       </div>
    </section>
  )
}

export default Projects

const projectItems = [
  {
    id: 1,
    image: 'project1.png',
    alt: 'project3',
    title: 'Sport Shop',
    content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  },
  {
    id: 2,
    image: 'project2.png',
    alt: 'project3',
    title: 'Medical School',
    content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  },
  {
    id: 3,
    image: 'project3.PNG',
    alt: 'project3',
    title: 'Facebook Clone',
    content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  },
]

const projectItems2 = [
  {
    id: 1,
    image: 'cafeRecipe.jpg',
    alt: 'cafe',
    title: 'Cafe Recipe',
    content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  },
  {
    id: 2,
    image: 'Backend.png',
    alt: 'mongodb project',
    title: 'MongoDB',
    content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  },
  {
    id: 3,
    image: 'restAPI.png',
    alt: 'rest api',
    title: 'REST API',
    content: 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'
  },
] 