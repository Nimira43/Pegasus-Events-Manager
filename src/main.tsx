import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/app/layouts/styles.css'
import App from './app/layouts/App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
