import * as React from "react"
import { Card, CardHeader } from "./card";
import { useState, useEffect } from 'react';

interface Software {
  id: number;
  name: string;
  os: string | null;
  cpu: string | null;
  ram: number | null;
  storage: number | null;
}

export function SoftwareItemList() {
  const [items, setItems] = useState<Software[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/software');
        if (!response.ok) throw new Error('Network response was not ok');
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

  if (loading) return <div>Loading software options...</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {items.map((sw) => (
        <div key={sw.id} className="p-4 rounded-lg shadow-sm">
          <h3 className="font-bold">{sw.name}</h3>
          <p className="text-sm text-muted-foreground">OS: {sw.os}</p>
        </div>
      ))}
    </div>
  );
}