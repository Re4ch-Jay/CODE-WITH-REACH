import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Stack, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import ProjectHero from './ProjectHero';
import Language from '../Language Icons/Language';
import { Container } from '@mui/system';

const yellow = {
  color: '#edca18'
}

function Projects() {
  return (
    <section className='container-fluid'>
        <ProjectHero/>
        <div className="text-center text-warning pt-5">
            <h1>All Projects</h1>
            <p className='text-muted'>Projects & Web I've Created</p>
        </div>
       <Container>
       <Stack  
          direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row'}}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {projectItems.map(item => (
                <div className='m-2 project-card' key={item.id}>
                  <Card  sx={{ maxWidth: "100%", margin: '20px 0'}} component="li">
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
                </div>
              
            ))}
        </Stack>
        <Stack  
          direction={{ xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row'}}
          spacing={{ xs: 1, sm: 2, md: 4 }}
          >
            {projectItems2.map(item => (
                <div className='m-2 project-card' key={item.id}>
                  <Card  sx={{ maxWidth: "100%", margin: '20px 0'}} component="li">
                    
                      <CardMedia
                        component="img"
                        height="140"
                        image={item.image}
                        alt={item.image}
      
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div" sx={yellow}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          ...{item.content.slice(-100)}...
                        </Typography>
                      </CardContent>
                      <CardActions>
                      <Link to={`/projects/${item.id}`}>
                          <Button size="small">Read more</Button>
                      </Link>
                        <a href={item.link} target='_blank'>
                          <Button size="small">github</Button>
                        </a>
                      </CardActions>
             
                  </Card> 
                </div>
              
            ))}
        </Stack>
        <div className="text-center text-warning py-5">
                <h4>Language & Framework</h4>
                <p className='text-muted'>That included in those projects</p>
            </div>
        <Language/>
       </Container>
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
    link: 'https://github.com/Re4ch-Jay/',
    content: 'Well, it is not just a single project that react.JS has helped me with. React.js is my daily driver, being a front-end developer, I use it every day to code. Currently, I am working on a CRM and React.js is being used to develop the front-end.'
  },
  {
    id: 2,
    image: 'project2.png',
    alt: 'project3',
    title: 'Medical School',
    link: 'https://github.com/Re4ch-Jay/medical_school',
    content: 'Well, it is not just a single project that react.JS has helped me with. React.js is my daily driver, being a front-end developer, I use it every day to code. Currently, I am working on a CRM and React.js is being used to develop the front-end.'
  },
  {
    id: 3,
    image: 'project3.PNG',
    alt: 'project3',
    title: 'Facebook Clone',
    link: 'https://github.com/Re4ch-Jay/React-Facebook-MUI',
    content: 'Well, it is not just a single project that react.JS has helped me with. React.js is my daily driver, being a front-end developer, I use it every day to code. Currently, I am working on a CRM and React.js is being used to develop the front-end.'
  },
]

const projectItems2 = [
  {
    id: 1,
    image: 'cafeRecipe.jpg',
    alt: 'cafe',
    title: 'Cafe Recipe',
    link: 'https://github.com/Re4ch-Jay/Node-JWT-with-CRUD',
    content: 'As a computer science student, I use NodeJs Development Services for building my web apps, and I find it very easy to use NodeJs as a backend language. It is easy to integrate, and it provides you a lot of different modules that you can use to make your app awesome.'
  },
  {
    id: 2,
    image: 'Backend.png',
    alt: 'mongodb project',
    title: 'MongoDB',
    link: 'https://github.com/Re4ch-Jay/Native_MongoDB-with-NodeJS',
    content: 'As a computer science student, I use NodeJs Development Services for building my web apps, and I find it very easy to use NodeJs as a backend language. It is easy to integrate, and it provides you a lot of different modules that you can use to make your app awesome.'
  },
  {
    id: 3,
    image: 'restAPI.png',
    alt: 'rest api',
    title: 'REST API',
    link: 'https://github.com/Re4ch-Jay/Backend-REST-API-',
    content: 'As a computer science student, I use NodeJs Development Services for building my web apps, and I find it very easy to use NodeJs as a backend language. It is easy to integrate, and it provides you a lot of different modules that you can use to make your app awesome.'
  },
] 