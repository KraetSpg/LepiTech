import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Navbar01 } from './components/ui/shadcn-io/navbar-01/index'
import { Navbar03 } from './components/ui/shadcn-io/navbar-03/index'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      
      <Navbar03 />
    </div>
  </StrictMode>,
)