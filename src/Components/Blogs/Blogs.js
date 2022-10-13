import { Card, CardActionArea, CardContent, CardMedia, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';
import Language from '../Language Icons/Language';

const padding = {
  padding: "10px 0"
}

const yellow = {
  color: "#edca18"
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
        {blogList.map(item => (
          
            <Card sx={{ maxWidth: 345 }} key={item.id} component="li">
              <CardActionArea>
                <Link to={item.link}>
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
                    ...{item.body.slice(-100)}...
                    </Typography>
                  </CardContent>
                </Link>
              </CardActionArea>
            </Card>
        ))}
        </Stack>
       
        <div className='py-5 my-5'>
          <Language/>
        </div>
      </Container>
      
    </section>
  )
}

export default Blogs



const blogList = [
  {
    id: 1,
    image: '1.png',
    title: 'ReactJS',
    link: 'reactjs',
    body: 'The ultimate champion for developing the front-end of web applications. There is a ton of features that can be mentioned here. To name a couple, the best part is that the whole application is a single-page application which gives an amazing user experience the application feels a lot faster and smoother.',
  },
  {
    id: 2,
    image: '2.png',
    title: 'JavaScript',
    link: 'javascript',
    body: 'JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well. JavaScript supports object-oriented programming with object prototypes and classes. It also supports functional programming since functions are first-class that can be easily created via expressions and passed around like any other object. This page serves as a quick overview of various JavaScript language features, written for readers with background in other languages, such as C or Java.',
  },
  {
    id: 3,
    image: '5.png',
    title: 'NodeJS',
    link: 'nodejs',
    body: 'Creating a simple but advanced service in the backend for my software is an ideal choice as it provides us with different modules, which helps in the easy integration of a lot of other functions.',
  },
  
  
]
