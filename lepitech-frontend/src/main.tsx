import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@/components/ui/theme-provider" 

import { Navbar03 } from './components/ui/shadcn-io/navbar-03/index'
import { Hero } from "./components/ui/hero"
import { SearchWithCards } from "./components/ui/hero"
import Example from "./components/examples/accordion/standard/accordion-standard-5"
import { SelectSoftwareComponent } from './components/ui/SelectSoftwareComponent'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        
        <Navbar03 />
        <Hero />
        
        <div className="mx-auto w-full max-w-2xl md:max-w-4xl lg:max-w-[100rem] px-4">
          <Example />
          <SelectSoftwareComponent />
        </div>
        
        <SearchWithCards />
      </div>

    </ThemeProvider>
  </StrictMode>,
)