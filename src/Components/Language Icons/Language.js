import { Avatar, Container, Grid, Stack } from '@mui/material'
import React from 'react'

function Language() {
    console.log(languages)
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
                        <div className="language" key={language.id}>
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
        id: 1,
        image: '1.png'   
    },
    {
        id: 2,
        image: '2.png'   
    },
    {
        id: 3,
        image: '3.png'   
    },
    {
        id: 4,
        image: '4.png'   
    },
    {
        id: 5,
        image: '5.png'   
    },
    {
        id: 6,
        image: '11.png'   
    },
    {
        id: 7,
        image: '8.png'   
    },
    {
        id: 8,
        image: '9.png'   
    },
]