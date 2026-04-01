import { pdf } from '@react-pdf/renderer';
import { LaptopReport } from './LaptopReport';
import { Button } from './button';
import { Device } from './SelectLaptop';

interface ExportButtonProps {
  devices: Device[];
  software: string[];
}

export function ExportButton({ devices, software }: ExportButtonProps) {
  const handleDownload = async () => {
    try {
      // Wir erstellen das PDF-Dokument manuell als Blob
      const doc = <LaptopReport devices={devices} selectedSoftware={software} />;
      const blob = await pdf(doc).toBlob();
      
      // Wir erstellen einen temporären Download-Link im Browser
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'laptop-check.pdf';
      
      // Klick simulieren und aufräumen
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("PDF Download fehlgeschlagen:", error);
      alert("PDF konnte nicht erstellt werden.");
    }
  };

  if (!devices || devices.length === 0) return null;

  return (
    <Button 
      onClick={handleDownload}
      size="lg" className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--accent))]"
    >
      Ergebnis als PDF speichern
    </Button>
  );
}