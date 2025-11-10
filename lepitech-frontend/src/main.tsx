import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Navbar03 } from './components/ui/shadcn-io/navbar-03/index'
import { Hero } from "./components/ui/hero"
import { SearchWithCards } from "./components/ui/hero"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen bg-background text-foreground font-sans antialiased">
      <Navbar03 />
      <Hero />
      <SearchWithCards />
    </div>
  </StrictMode>,
)