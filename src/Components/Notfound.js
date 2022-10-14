import { Button } from '@mui/material'
import React from 'react'

function Notfound() {
  return (
    <section className='container not-found'>
        <div className="text-center text-warning py-5 my-5">
            <h1>Sorry, we cannot find that page :(</h1>
                <a 
                href="/">
                    <Button
                        variant='contained' 
                        // endIcon={<EmailIcon/>}
                        sx={{color: 'white', margin: "20px 0"}}
                        >
                        Home
                    </Button>
                </a>
        </div>
    </section>
  )
}

export default Notfound