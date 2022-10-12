import { Button, Card, CardActions, CardContent, Typography, Stack } from '@mui/material'
import React from 'react'

const skillItem = [
    {
        title: 'Frontend Development',
        skills: 'JavaScript ReactJS HTML CSS Bootstrap Material UI NextJS'
    },
    
    {
        title: 'Backends Development',
        skills: 'NodeJS ExpressJS MongoDB'
    },
    
    {
        title: 'Programming Language',
        skills: 'JavaScript C/C++ Python R'
    },
]

function Skills() {
  return (
        <section id="intro" className='py-5'>
        <div className="container-xxl">
            <div className="text-center py-5">
                <h1 className='text-warning'>Skills</h1>
                <p className='text-muted'>My Software development skills</p>
            </div>
                <Stack direction="row" spacing={2} justifyContent='space-around'>
                    <div className='col-sm-7 d-block'>
                        {skillItem.map(item => (
                             <Card sx={{ minWidth: 275, margin: '20px 0' }} key={item.title}>
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
                             <CardActions>
                                 <Button size="small">Read More</Button>
                             </CardActions>
                         </Card>
                        ))}
                    </div>
                </Stack>
            </div>
    </section>
  )
}

export default Skills
