import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// UI Components
import { ThemeProvider } from "./components/ui/theme-provider";
import { Navbar03 } from './components/ui/shadcn-io/navbar-03/index'
import { Hero } from "./components/ui/hero"
import { SelectSoftwareComponent } from './components/ui/SelectSoftwareComponent'
import { SelectLaptop } from './components/ui/SelectLaptop'
import { MinimumRequirementsBox } from "./components/ui/MinimumRequirementsBox"
import type { AggregatedRequirements } from "./components/ui/MinimumRequirementsBox"
 
// Export Logic
import { ExportButton } from './components/ui/ExportButton'
import type { Device } from './components/ui/SelectLaptop'

function RootLayout() {
  const [devices, setDevices] = useState<Device[]>([])
  const [requirements, setRequirements] = useState<AggregatedRequirements | null>(null)
  const [showRequirementsBox, setShowRequirementsBox] = useState(false)
  const [isRequirementsMinimized, setIsRequirementsMinimized] = useState(false)
  const renderExportSection = () => {
    if (devices.length === 0) return null;

    return (
      <div className="flex justify-center my-10">
        <ExportButton devices={devices} software={softwareNames} />
      </div>
    );
  };
  const [softwareNames, setSoftwareNames] = useState<string[]>([]);

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <Navbar03 />
        <Hero />
        {/* 1. Software Auswahl Bereich */}
        <div id="software" className="mx-auto w-full max-w-2xl md:max-w-4xl lg:max-w-[100rem] px-4">
          <SelectSoftwareComponent 
            onDevicesFound={(foundDevices) => {
              setDevices(foundDevices)
            }}
            onRequirementsFound={(foundRequirements) => {
              setRequirements(foundRequirements)
              setShowRequirementsBox(foundRequirements !== null)
              if (foundRequirements) {
                setIsRequirementsMinimized(false)
              }
            }}
            onSoftwareChange={setSoftwareNames}
          />
        </div>

        {/* 2. Export Button Bereich */}
        {renderExportSection()}

        {/* 3. Laptop Ergebnisse */}
        <div className="mx-auto w-full max-w-2xl md:max-w-4xl lg:max-w-[100rem] px-4">
           <SelectLaptop devices={devices} />
        </div>
        <MinimumRequirementsBox
          visible={showRequirementsBox}
          minimized={isRequirementsMinimized}
          requirements={requirements}
          onMinimize={() => setIsRequirementsMinimized(true)}
          onExpand={() => setIsRequirementsMinimized(false)}
        />
      </div>
    </ThemeProvider>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RootLayout />
  </StrictMode>,
)