import * as React from "react";

interface Software {
  id: number;
  name: string;
  os: string | null;
  cpu: string | null;
  ram: number | null;
  storage: number | null;
}

type Props = {
  items: Software[];
  onDropItem: (sw: Software) => void;
};

export function SoftwareItemListSelected({ items, onDropItem }: Props) {
  return (
    <div
      className="flex flex-wrap gap-4 bg-black/10 w-full h-full border border-dashed border-gray-500 rounded"
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        const raw = e.dataTransfer.getData("application/json");
        if (!raw) return;
        const sw = JSON.parse(raw) as Software;
        onDropItem(sw);
      }}
    >
      {items.map((sw) => (
        <div
          key={sw.id}
          className="p-4 dark:bg-[#262626] bg-slate-50 rounded-lg shadow-sm border border-gray-600  max-h-24"
        >
          <h3 className="font-bold">{sw.name}</h3>
          <p className="text-sm text-muted-foreground">OS: {sw.os}</p>
        </div>
      ))}
    </div>
  );
}