import * as React from "react"
import { SoftwareItemList } from "./SoftwareItemList"
import { SoftwareItemListSelected } from "./SoftwareItemListSelected"
import { Button } from "./button"
import type { Device } from "./SelectLaptop"

export interface Software {
  id: number
  name: string
  os: string | null
  cpu: string | null
  ram: number | null
  storage: number | null
}

interface SoftwareResponse {
  devices: Device[]
}

type SelectSoftwareProps = React.HTMLAttributes<HTMLDivElement> & {
  onDevicesFound?: (devices: Device[]) => void
}

const SelectSoftwareComponent = React.forwardRef<
  HTMLDivElement,
  SelectSoftwareProps
>(({ className, onDevicesFound, ...props }, ref) => {
  const [selected, setSelected] = React.useState<Software[]>([])

  const sendItems = async () => {
    const ids = selected.map((sw) => sw.id)

    try {
      const response = await fetch("http://localhost:3001/software", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ softwareids: ids }),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch matching devices")
      }

      const data = (await response.json()) as SoftwareResponse
      onDevicesFound?.(data.devices ?? [])
    } catch (error) {
      console.error("Error while fetching matching devices:", error)
      onDevicesFound?.([])
    }
  }

  const handleDropToSelected = (sw: Software) => {
    setSelected((prev) =>
      prev.some((x) => x.id === sw.id) ? prev : [...prev, sw]
    )
  }

  const handleRemoveFromSelected = (id: number) => {
    setSelected((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="flex flex-wrap justify-center">
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4 border border-solid rounded-sm my-12">
        <SoftwareItemList />
        <img
          width="100px"
          src="https://t4.ftcdn.net/jpg/05/30/79/15/360_F_530791557_T8hNharBQQJqmw0R2FRjCrC9CgNwaeui.jpg"
        />
        <SoftwareItemListSelected
          items={selected}
          onDropItem={handleDropToSelected}
          onRemoveItem={handleRemoveFromSelected}
        /></div>
      <Button
        size="lg"
        className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--accent))]"
        onClick={sendItems}
      >
        Geräte finden
      </Button>
    </div>
  )
})

export { SelectSoftwareComponent }