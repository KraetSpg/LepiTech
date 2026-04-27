import * as React from "react";

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
  items: Software[];
  onDropItem: (sw: Software) => void;
  onRemoveItem: (id: number) => void;
};

export function SoftwareItemListSelected({ items, onDropItem, onRemoveItem }: Props) {
  return (
    <div
      className="flex h-full min-h-[340px] flex-wrap content-start gap-3 rounded-xl border border-dashed border-border p-2"
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
          onClick={() => onRemoveItem(sw.id)}
          key={sw.id}
          className="max-h-24 cursor-pointer rounded-xl border border-border bg-card p-4 shadow-sm transition-colors hover:border-destructive/60"
        >
          <h3 className="font-bold">{sw.name}</h3>
          <p className="text-sm text-muted-foreground">OS: {sw.os}</p>
        </div>
      ))}

      {items.length === 0 ? (
        <div className="flex h-full w-full items-center justify-center px-4 text-center text-sm text-muted-foreground">
          Ziehe Software-Karten hier hinein.
        </div>
      ) : null}
    </div>
  );
}