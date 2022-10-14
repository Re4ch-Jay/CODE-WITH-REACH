import { Avatar, Button, Card, Container, Stack } from '@mui/material'
import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmailIcon from '@mui/icons-material/Email';
import Detail from './Detail';

function About() {
  return (
    <Container maxWidth="xl">
        <section id="intro" className='py-5'>
            <div className="container-xxl">
                <div className="text-center py-5">
                    <h1 className='text-warning'>About Me</h1>
                    <p className='text-muted'>My Introduction</p>
                </div>
                <div className="row g3 justify-content-center align-items-center">
                    
                    <div className="col-sm-6 d-none d-md-block">
                        <Avatar src="reach1.jpg" alt="" sx={{ width: "350px", height: "350px" }} />
                    </div>
                    <div className="col-md-5 text-center text-md-start">
                    <Stack direction="row" spacing={2} justifyContent='space-between'>
                        {cardItem.map(item => (
                        <Card component="li" key={item.subheader} sx={{ width: 200, textAlign: 'center', height: 150, maxWidth: 200}}>
                            <CardHeader
                                title={item.title}
                                subheader={item.subheader}    
                            />
                            <CardContent>
                                <Typography color="text.secondary">
                                    {item.content}
                                </Typography>
                            </CardContent>
                        </Card>
                        ))}
                    </Stack>
                    <Detail/>
                    <a 
                    href="PhatPanhareachCV.pdf" download>
                        <Button
                            variant='contained' 
                            endIcon={<EmailIcon/>}
                            sx={{color: 'white', margin: "20px 0"}}
                            >
                            Download CV
                        </Button>
                    </a>
                    
                    </div>

                </div>
                
            </div>
        </section>
    </Container>
  )
}

export default About

const cardItem = [
    {
        title: <SchoolIcon/>,
        subheader: 'CADT',
        content: 'Year 2'
    },
    {
        title: <SportsEsportsIcon/>,
        subheader: 'Gaming',
        content: 'I love game'
    },
    {
        title: <CodeIcon/>,
        subheader: 'Coding',
        content: 'Free time'
    }
]
