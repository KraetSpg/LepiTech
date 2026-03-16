import * as React from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./card"
import { Button } from "./button"

export interface Device {
  id: number;
  name: string;
  manufacturer: string | null;
  ram: number;
  storage: number;
  price: number | null;
}

type SelectLaptopProps = {
  devices: Device[];
};

export function SelectLaptop({ devices }: SelectLaptopProps) {

  return (
    // Geändert: grid-cols-2 (mobil) bis grid-cols-4 (desktop) für schmalere Karten
    <div id="laptops" className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {devices.map((device) => (
        <Card key={device.id} className="flex flex-col border border-border hover:border-emerald-500 transition-all bg-card shadow-sm overflow-hidden">
          
          {/* Kleinerer Bild-Bereich */}
          <div className="aspect-video w-full bg-muted flex items-center justify-center overflow-hidden border-b">
            <img 
              src={`/pics/device-${device.id}.png`} 
              alt={device.name}
              className="object-cover w-full h-full p-2" // Padding hinzugefügt, damit das Bild nicht am Rand klebt
              onError={(e) => { e.currentTarget.src = "https://placehold.co/400x250?text=Laptop" }}
            />
          </div>

          <CardHeader className="p-3 pb-0"> {/* Kleineres Padding */}
            <div className="text-[10px] font-medium text-emerald-500 uppercase tracking-tighter">
              {device.manufacturer ?? "Unbekannt"}
            </div>
            <CardTitle className="text-sm font-bold truncate">{device.name}</CardTitle>
          </CardHeader>

          <CardContent className="p-3 py-2 flex-1 space-y-1 text-[11px] text-muted-foreground">
            <div className="flex justify-between">
              <span>RAM:</span>
              <span className="font-medium text-foreground">{Math.round(device.ram / 1024)} GB</span>
            </div>
            <div className="flex justify-between">
              <span>Speicher:</span>
              <span className="font-medium text-foreground">
                {device.storage >= 1000000 ? `${(device.storage / 1024 / 1024).toFixed(0)} TB` : `${Math.round(device.storage / 1024)} GB`}
              </span>
            </div>
          </CardContent>

          <CardFooter className="p-3 pt-0 flex flex-col gap-2">
            <div className="text-lg font-bold text-center text-foreground border-t pt-2">
              {((device.price ?? 0) / 100).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
            </div>
            <Button className="w-full h-8 text-xs bg-emerald-500 hover:bg-emerald-600 text-white font-bold">
              Kaufen
            </Button>
          </CardFooter>

        </Card>
      ))}
    </div>
  )
}