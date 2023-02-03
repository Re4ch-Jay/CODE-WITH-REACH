import { Box, createTheme, ThemeProvider } from '@mui/material';
import Navbar from './Components/Navbar/Navbar';
import React, { createContext, useState } from 'react';
import Home from './Components/Home';
import Blogs from './Components/Blogs/Blogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './Components/Projects Page/Projects';
import Footer from './Components/Footer/Footer';
import ProjectDetail from './Components/Projects Page/ProjectDetail';
import Reactjs from './Components/Blogs/Reactjs';
import Nodejs from './Components/Blogs/Nodejs';
import Javascript from './Components/Blogs/Javascript';
import Notfound from './Components/Notfound';
import Certification from './Components/Certification/Certification';

export const setThemeContext = createContext();

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
    <setThemeContext.Provider value={{mode, setMode}}>
    <ThemeProvider theme={darkTheme}>
      <BrowserRouter>
        <Box bgcolor={'background.default'} color={'text.primary'}>
          <Navbar mode={mode} setMode={setMode}/>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/projects' element={<Projects/>} />
              <Route path="/projects/:id" element={<ProjectDetail />}/> 
              <Route path="/certifications" element={<Certification />}/> 

              <Route path='/blogs' element={<Blogs/>} />
              <Route path="blogs/reactjs" element={<Reactjs />}/> 
              <Route path="blogs/javascript" element={<Javascript />}/> 
              <Route path="blogs/nodejs" element={<Nodejs />}/> 
              <Route path="*" element={<Notfound/>}/>
            </Routes>
          <Footer/>
        </Box>
      </BrowserRouter>
    </ThemeProvider>
    </setThemeContext.Provider>
  );
}

export default App;