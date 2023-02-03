import Language from '../Language Icons/Language'
import React from 'react';

function Certification() {
  return (
    <div className='container my-5 py-5 d-flex text-center flex-column'>
        <div className='text-center mb-5'>
            <h1 className='text-warning'>Certifification & Achievement</h1>
        </div>
        <div className='mb-5 pb-5 d-flex flex-column flex-lg-row justify-content-between align-items-center'>
            <div className='flex-1 text-center text-lg-start'>
                <h2>Certification from Linkedin & Microsoft</h2>
                <p className='fs-5 text-warning'>Top Skills covered</p>
                <p>Programming <br /> Software Development <br /> Python <br /> Algorithms <br /> Object Oriented Programming <br /> Career essential</p> 
            </div>
            <div>
            <img src="certificates/Software_Development.jpg" alt="" style={{height: '70%', width: '70%'}} />
            </div>
        </div>

        <div className='mb-5 pb-5 d-flex flex-column flex-lg-row-reverse justify-content-between align-items-center'>
            <div className='flex-1 text-center text-lg-end'>
                <h2>Certification from Linkedin</h2>
                <p className='fs-5 text-warning'>Top Skills covered</p>
                <p>Programming <br /> Software Development <br /> Frontend Development <br /> Backend Development <br /> Rest APIs<br /> NodeJS <br /> ReactJs <br /> Version Control <br /> Database SQL & NoSQL</p> 
            </div>
            <div>
            <img src="certificates/Fullstack_certificate.jpg" alt="" style={{height: '70%', width: '70%'}} />
            </div>
        </div>

        <div className='mb-5 d-flex flex-column flex-lg-row justify-content-between align-items-center'>
            <div className='flex-1 text-center text-lg-start'>
                <h2>Certification from Simplilearn</h2>
                <p className='fs-5 text-warning'>Top Skills covered</p>
                <p>Programming <br /> Machine Learning Introduction <br /> Data Science Introduction <br /> Math</p> 
            </div>
            <div>
            <img src="certificates/AI_certificate.jpg" alt="" style={{height: '70%', width: '70%'}} />
            </div>
        </div>
        <div className='mb-5'></div>
        <Language/>
    </div>
  )
}

export default Certification