import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from "react-router";
import './index.css'
import App from './App.tsx'
import About from './pages/About.tsx';
import Contact from './pages/Contact.tsx';
import Location from './pages/Location.tsx';
import WebDesign from './pages/WebDesign.tsx';
import AppDesign from './pages/AppDesign.tsx';
import GraphicDesign from './pages/GraphicDesign.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <Routes> 
      <Route path='/' element={<App />} />
      <Route path='/about' element={<About />} />
      <Route path="/web-design" element={<WebDesign />} />
      <Route path="/app-design" element={<AppDesign />} />
      <Route path="/graphic-design" element={<GraphicDesign />} />
      <Route path='/location' element={<Location />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
