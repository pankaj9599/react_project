import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import  GlobalState  from './components/Context'; 


createRoot(document.getElementById('root')).render(
 

 <StrictMode>
  <GlobalState>
    <App />
  </GlobalState>
  </StrictMode>
)
