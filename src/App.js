import { Box, createTheme, ThemeProvider } from '@mui/material';
import Navbar from "./Components/Navbar"
import React, { useState } from 'react';
import Home from './Components/Home';
import Blogs from './Components/Blogs/Blogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './Components/Projects Page/Projects';
import Footer from './Components/Footer/Footer';
import ProjectDetail from './Components/Projects Page/ProjectDetail';
import Reactjs from './Components/Blogs/Reactjs';
import Nodejs from './Components/Blogs/Nodejs';
import Javascript from './Components/Blogs/Javascript';
function App() {
  const [mode, setMode] = useState('dark')
  const darkTheme = createTheme({
    palette: {
      mode: mode,
      primary: {
        main: '#edca18',
      },
    }
  })
  return (
    <ThemeProvider  theme={darkTheme}>
      <BrowserRouter>
        <Box bgcolor={'background.default'} color={'text.primary'}>
          <Navbar mode={mode} setMode={setMode}/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/projects' element={<Projects/>} />
              <Route path="/projects/:id" element={<ProjectDetail />}/> 

              <Route path='/blogs' element={<Blogs/>} />
              <Route path="blogs/reactjs" element={<Reactjs />}/> 
              <Route path="blogs/javascript" element={<Javascript />}/> 
              <Route path="blogs/nodejs" element={<Nodejs />}/> 
            </Routes>
          <Footer/>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;