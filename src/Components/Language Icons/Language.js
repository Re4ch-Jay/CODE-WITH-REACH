import { Avatar, Container, Grid, Stack } from '@mui/material'
import React from 'react'

function Language() {
  return (
    <section className='container pb-5'>
        <Container>
            <div className='text-center'>
                <Stack
                    direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row', xl: 'row'}}
                    spacing={{ xs: 1, sm: 0, md: 1, lg: 4 }}
                    justifyContent="space-around"
                    alignItems="center"
                    >
                    {languages.map(language => (
                        <div className="language" key={language.image}>
                            <Grid item xs={2} sm={4} md={4} >
                                <Avatar src={language.image} sx={{ width: 70, height: 70 }}/>
                            </Grid>
                        </div>
                    ))}             
                </Stack>
            </div>
        </Container>
    </section>
  )
}

export default Language

const languages = [
    {
        image: '1.png'   
    },
    {
        image: '2.png'   
    },
    {
        image: '3.png'   
    },
    {
        image: '4.png'   
    },
    {
        image: '5.png'   
    },
    {
        image: '11.png'   
    },
    {
        image: '8.png'   
    },
    {
        image: '9.png'   
    },
]