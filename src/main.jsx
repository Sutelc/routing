import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import About from './aboutpage.jsx'
import NavBar from './navBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
    </BrowserRouter>

  </StrictMode>
)
