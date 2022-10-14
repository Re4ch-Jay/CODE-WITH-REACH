import { Avatar, Container, Grid, Stack } from '@mui/material'
import React from 'react'
import { languages } from './ImageLanguage'

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

