import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <h1 className='flex justify-center text-3xl font-bold'>Book Store</h1>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
