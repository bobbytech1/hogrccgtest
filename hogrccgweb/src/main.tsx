import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FolderRoute from './routes/route.tsx'
import { BrowserRouter } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FolderRoute />
    </BrowserRouter>
  </StrictMode>,
)
