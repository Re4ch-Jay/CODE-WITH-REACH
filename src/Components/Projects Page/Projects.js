import React from 'react'
import ProjectHero from './ProjectHero';
import Language from '../Language Icons/Language';
import { Container } from '@mui/system';
import { mobileProject2, mobileProject1, projectItems, projectItems2, projectItems3, projectItems4, projectItems5 } from './Items';
import FrontendProject from './FrontendProject';
import BackendProject from './BackendProject';
import { Stack } from '@mui/material';

function Projects() {
  return (
    <section className='container-fluid'>
        <ProjectHero/>
        <div className="text-center text-warning pt-5">
            <h1>All Projects</h1>
            <p className='text-muted'>Projects & Web I've Created</p>
        </div>
       <Container>

      
       <div className="text-center text-warning py-5">
                <h4>Mobile Development Projects</h4>
        </div>
        <Stack direction={direction} spacing={spacing}
          >
            {mobileProject1.map(item => (
                <div className='m-2 project-card' key={item.id}>
                  <BackendProject item={item} yellow={yellow}/>
                </div>
            ))}
        </Stack>

        <Stack direction={direction} spacing={spacing}
          >
            {mobileProject2.map(item => (
                <div className='m-2 project-card' key={item.id}>
                  <BackendProject item={item} yellow={yellow}/>
                </div>
            ))}
        </Stack>

       <div className="text-center text-warning py-5">
                <h4>Frontend Projects</h4>
        </div>
       <Stack direction={direction} spacing={spacing}
          >
            {projectItems.map(item => (
                <div className='m-2 project-card' key={item.id}>
                  <FrontendProject item={item} yellow={yellow}/>
                </div>
              
            ))}
        </Stack>

        <Stack direction={direction} spacing={spacing}
          >
            {projectItems4.map(item => (
                <div className='m-2 project-card' key={item.id}>
                  <FrontendProject item={item} yellow={yellow}/>
                </div>
              
            ))}
        </Stack>

        <Stack direction={direction} spacing={spacing}
          >
            {projectItems5.map(item => (
                <div className='m-2 project-card' key={item.id}>
                  <FrontendProject item={item} yellow={yellow}/>
                </div>
              
            ))}
        </Stack>

        <div className="text-center text-warning py-5">
                <h4>Backend Projects</h4>
        </div>
        <Stack direction={direction} spacing={spacing}
          >
            {projectItems2.map(item => (
                <div className='m-2 project-card' key={item.id}>
                  <BackendProject item={item} yellow={yellow}/>
                </div>
            ))}
        </Stack>

        <Stack direction={direction} spacing={spacing}
          >
            {projectItems3.map(item => (
                <div className='m-2 project-card' key={item.id}>
                  <BackendProject item={item} yellow={yellow}/>
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

const yellow = {
  color: '#edca18'
}

const direction = {
  xs: 'column', sm: 'column', md: 'column', lg: 'row', xl: 'row'
}

const spacing = {
  xs: 1, sm: 2, md: 4 
}