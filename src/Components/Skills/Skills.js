import { Card, CardContent, Typography, Stack } from '@mui/material'
import React from 'react'


function Skills() {
  return (
        <section id="intro" className='pb-5'>
        <div className="container-xxl">
            <div className="text-center py-5">
                <h1 className='text-warning'>Skills</h1>
                <p className='text-muted'>My Software development skills</p>
            </div>
                <Stack direction="row" spacing={2} justifyContent='space-around'>
                    <div className='col-sm-7 d-block'>
                        {skillItem.map(item => (
                            <Card component="li" sx={{ minWidth: 275, margin: '20px 0', borderRadius: 5 }} key={item.title}>
                                <CardContent>
                                    <Typography variant="h5">
                                        {item.title}
                                    </Typography>
                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    Skills
                                    </Typography>
                                    <Typography variant="body2">
                                    {item.skills}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </Stack>
            </div>
    </section>
  )
}

export default Skills



const skillItem = [
    {
        title: 'Frontend Development',
        skills: 'JavaScript, ReactJS, HTML, CSS, Bootstrap, Material UI, NextJS, React Native, TailwindCSS'
    },
    
    {
        title: 'Backends Development',
        skills: 'NodeJS, ExpressJS, MongoDB, Firebase, by building Rest API Security, Authentication and Hashing'
    },
    
    {
        title: 'Programming Language that I Understand',
        skills: 'JavaScript, C/C++, Python'
    },
]