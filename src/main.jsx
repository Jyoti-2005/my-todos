import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DataFetching from './context/DataFetching.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <DataFetching> <App/> </DataFetching>,
  // </StrictMode>,
)
