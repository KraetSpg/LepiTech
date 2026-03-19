import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ThemeProvider } from "@/components/ui/theme-provider" 
import { SelectLaptop } from './components/ui/SelectLaptop'
import type { Device } from './components/ui/SelectLaptop'
import { Navbar03 } from './components/ui/shadcn-io/navbar-03/index'
import { Hero } from "./components/ui/hero"
import { SelectSoftwareComponent } from './components/ui/SelectSoftwareComponent'
import { useState } from 'react'

function RootLayout() {
  const [devices, setDevices] = useState<Device[]>([])

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Navbar03 />
        <Hero />

        <div id="software" className="mx-auto w-full max-w-2xl md:max-w-4xl lg:max-w-[100rem] px-4">
          <SelectSoftwareComponent onDevicesFound={setDevices} />
        </div>

        <SelectLaptop devices={devices} />
      </div>
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootLayout />
  </StrictMode>,
)