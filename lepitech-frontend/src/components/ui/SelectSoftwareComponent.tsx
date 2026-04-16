import * as React from "react"
import { ArrowRight, Search } from "lucide-react"
import {
  SOFTWARE_CATEGORIES,
  SoftwareCategory,
  SoftwareItemList,
} from "./SoftwareItemList"
import { SoftwareItemListSelected } from "./SoftwareItemListSelected"
import { Button } from "./button"
import { Input } from "./input"
import type { Device } from "./SelectLaptop"
import { cn } from "../../lib/utils";

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

// Hier die Props um onSoftwareChange erweitern
type SelectSoftwareProps = React.HTMLAttributes<HTMLDivElement> & {
  onDevicesFound?: (devices: Device[]) => void
  onSoftwareChange?: (names: string[]) => void
}

const SelectSoftwareComponent = React.forwardRef<
  HTMLDivElement,
  SelectSoftwareProps
>(({ className, onDevicesFound, onSoftwareChange, ...props }, ref) => {
  const [selected, setSelected] = React.useState<Software[]>([])
  const [activeCategory, setActiveCategory] = React.useState<SoftwareCategory | null>(null)
  const [searchQuery, setSearchQuery] = React.useState("")

  React.useEffect(() => {
    const names = selected.map(sw => sw.name);
    onSoftwareChange?.(names);
  }, [selected, onSoftwareChange]);

  const sendItems = async () => {
    const ids = selected.map((sw) => sw.id)
    try {
      const response = await fetch("http://localhost:3001/software", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ softwareids: ids }),
      })

      if (!response.ok) throw new Error("Failed to fetch matching devices")

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

  const handleCategoryClick = (category: SoftwareCategory) => {
    setActiveCategory((prev) => (prev === category ? null : category))
  }

  return (
    <div id="search-section" ref={ref} className={cn("my-10 w-full", className)} {...props}>
      {/* Kategorien Filter */}
      <div className="mb-4 flex flex-wrap gap-3">
        {SOFTWARE_CATEGORIES.map((category) => (
          <Button
            key={category}
            type="button"
            variant={activeCategory === category ? "default" : "outline"}
            className={cn(
              "rounded-xl px-6 py-5 text-base",
              activeCategory === category ? "bg-primary text-primary-foreground" : "border-border"
            )}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Suche */}
      <div className="mb-4 flex max-w-xl items-center gap-2 rounded-xl border border-border bg-card/50 px-3 py-2 shadow-sm">
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
        <Input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          placeholder="Software suchen..."
          className="h-8 border-0 bg-transparent px-0 shadow-none focus-visible:ring-0"
        />
      </div>

      {/* Drag & Drop Bereich */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto_1fr] lg:items-start">
        <div className="min-h-[480px] rounded-sm border border-border p-3">
          <SoftwareItemList searchQuery={searchQuery} />
        </div>

        <div className="hidden lg:flex lg:self-center">
          <ArrowRight className="h-20 w-20 text-muted-foreground" strokeWidth={1.5} />
        </div>

        <div className="min-h-[480px] rounded-sm border border-border p-3">
          <SoftwareItemListSelected
            items={selected}
            onDropItem={handleDropToSelected}
            onRemoveItem={handleRemoveFromSelected}
          />
        </div>
      </div>

      <Button
        size="lg" className="mt-5 bg-[hsl(var(--primary))] hover:bg-[hsl(var(--accent))]"
        onClick={sendItems}
      >
        Geräte finden
      </Button>
    </div>
  )
})

export { SelectSoftwareComponent }