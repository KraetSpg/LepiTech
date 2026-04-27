import { useEffect, useState } from "react";

export const SOFTWARE_CATEGORIES = [
  "Office",
  "Kommunikation",
  "Design & Medien",
  "Programmierung",
  "CAD-Software",
] as const;

export type SoftwareCategory = (typeof SOFTWARE_CATEGORIES)[number];

interface Software {
  id: number;
  name: string;
  os: string | null;
  cpu: string | null;
  ram: number | null;
  storage: number | null;
  categories: string | null;
}

type Props = {
  searchQuery?: string;
  activeCategory?: SoftwareCategory | null;
  onDragStartItem?: (sw: Software) => void;
};

export function SoftwareItemList({ searchQuery = "", activeCategory, onDragStartItem }: Props) {
  const [items, setItems] = useState<Software[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3001/software");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error("Error fetching software:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const normalizedQuery = searchQuery.trim().toLowerCase();
  const visibleItems = items.filter((sw) => {
    // Filter by search query
    if (normalizedQuery) {
      const name = sw.name.toLowerCase();
      const os = (sw.os ?? "").toLowerCase();
      if (!name.includes(normalizedQuery) && !os.includes(normalizedQuery)) {
        return false;
      }
    }

    // Filter by category
    if (activeCategory) {
      const categories = (sw.categories ?? "").toLowerCase();
      const normalizedCategory = activeCategory.toLowerCase();
      if (!categories.includes(normalizedCategory)) {
        return false;
      }
    }

    return true;
  });

  if (loading) {
    return (
      <div className="flex h-full min-h-[340px] items-center justify-center text-sm text-muted-foreground">
        Lade Software...
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 max-h-[80vh] overflow-auto">
      {visibleItems.map((sw) => (
        <div
          key={sw.id}
          className="cursor-grab rounded-xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-primary/60"
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData("application/json", JSON.stringify(sw));
            onDragStartItem?.(sw);
          }}
        >
          <h3 className="font-bold">{sw.name}</h3>
          <p className="text-sm text-muted-foreground">OS: {sw.os}</p>
        </div>
      ))}

      {visibleItems.length === 0 ? (
        <div className="col-span-full rounded-xl border border-dashed border-border p-6 text-sm text-muted-foreground">
          Keine passende Software gefunden.
        </div>
      ) : null}
    </div>
  );
}
