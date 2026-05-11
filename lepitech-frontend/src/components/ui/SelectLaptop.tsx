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
  const [sortAscending, setSortAscending] = React.useState(true)

  const sortedDevices = React.useMemo(() => {
    return [...devices].sort((a, b) => {
      const priceA = a.price ?? Number.MAX_SAFE_INTEGER
      const priceB = b.price ?? Number.MAX_SAFE_INTEGER
      return sortAscending ? priceA - priceB : priceB - priceA
    })
  }, [devices, sortAscending])

  return (
    <section id="laptops" className="p-4">
      <div className="mb-4 flex justify-end">
        <Button
          variant="outline"
          onClick={() => setSortAscending((prev) => !prev)}
          className="border-border"
        >
          Nach Preis sortieren: {sortAscending ? "Aufsteigend" : "Absteigend"}
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {sortedDevices.map((device) => (
          <Card key={device.id} className="flex flex-col border border-border hover:border-emerald-500 transition-all bg-card shadow-sm overflow-hidden">

            {/* Kleinerer Bild-Bereich */}
            <div className="aspect-video w-full bg-muted flex items-center justify-center overflow-hidden border-b p-12">
              <img
                src={`/pics/device-${device.id}.png`}
                alt={device.name}
                className="object-cover w-full p-2" // Padding hinzugefügt, damit das Bild nicht am Rand klebt
                onError={(e) => { e.currentTarget.src = "https://cdn.pixabay.com/photo/2016/01/13/01/43/computer-1137018_1280.png" }}
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
                  {device.storage >= 1000 ? `${(device.storage / 1024).toFixed(0)} TB` : `${device.storage} GB`}
                </span> 
              </div>
            </CardContent>

            <CardFooter className="p-3 pt-0 flex flex-col gap-2">
              <div className="text-lg font-bold text-center text-foreground border-t pt-2">
                {((device.price ?? 0)).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
              </div>
              <a href={"https://geizhals.at/?fs=" + device.name}>
                <Button className="w-full h-8 text-xs bg-emerald-500 hover:bg-emerald-600 text-white font-bold">
                  Kaufen
                </Button>
              </a>
            </CardFooter>

          </Card>
        ))}
      </div>
    </section>
  )
}