import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"


export function Hero() {
  return (
    <section id="home" className="flex flex-col items-center justify-center text-center py-24 px-6 ">
      <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-[hsl(var(--primary))]">
        Willkommen bei LepiTech
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
        Wir entwickeln moderne, nutzerfreundliche Softwarelösungen für dein Unternehmen.
      </p>

      <div className="mt-8 flex gap-4">
        <Button size="lg" className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--accent))]">
          Jetzt starten
        </Button>

        <Button size="lg" variant="outline">
          Mehr erfahren
        </Button>
      </div>
    </section>
  )
}

export function SearchWithCards() {
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("alle")

  const items = [
    { title: "Produkt A", category: "software" },
    { title: "Produkt B", category: "support" },
    { title: "Produkt C", category: "hardware" },
  ]

  const filteredItems = items.filter(
    item =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "alle" || item.category === filter)
  )

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between">
        <Input
          placeholder="Suchen..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:max-w-md"
        />

        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              Filter: {filter === "alle" ? "Alle" : filter}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-48">
            <div className="flex flex-col gap-2">
              <Button variant="ghost" onClick={() => setFilter("alle")}>Alle</Button>
              <Button variant="ghost" onClick={() => setFilter("software")}>Software</Button>
              <Button variant="ghost" onClick={() => setFilter("support")}>Support</Button>
              <Button variant="ghost" onClick={() => setFilter("hardware")}>Hardware</Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      {/* Card Grid */}
      <div className="grid gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Kategorie: {item.category}
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-center text-muted-foreground">Keine Ergebnisse.</p>
        )}
      </div>
    </section>
  )
}