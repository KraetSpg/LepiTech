import React from 'react';
import { Page, Text, View, Document as PDFDocument, StyleSheet } from '@react-pdf/renderer';
import { Device } from './SelectLaptop';

const styles = StyleSheet.create({
  page: { 
    padding: 40, 
    fontFamily: 'Helvetica', 
    fontSize: 10, 
    backgroundColor: '#FFFFFF',
    paddingBottom: 65 // Platz für den Footer
  },
  header: { 
    marginBottom: 20, 
    borderBottomWidth: 1, 
    borderBottomColor: '#10b981', 
    paddingBottom: 10 
  },
  title: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: '#10b981' 
  },
  sectionTitle: { 
    fontSize: 12, 
    fontWeight: 'bold', 
    marginTop: 20, 
    marginBottom: 8, 
    backgroundColor: '#f3f4f6', 
    padding: 5,
    borderRadius: 2
  },
  softwareBox: {
    padding: 8,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    borderRadius: 4,
    marginBottom: 10
  },
  row: { 
    flexDirection: 'row', 
    borderBottomWidth: 1, 
    borderBottomColor: '#e5e7eb', 
    paddingVertical: 8, 
    alignItems: 'center' 
  },
  cellHeader: { 
    fontWeight: 'bold', 
    color: '#4b5563',
    fontSize: 9
  },
  // Spaltenbreiten angepasst: col1 (Name) ist jetzt viel breiter
  col1: { width: '50%' }, 
  col2: { width: '15%', textAlign: 'center' },
  col3: { width: '15%', textAlign: 'center' },
  col4: { width: '20%', textAlign: 'right' },
  
  footer: { 
    position: 'absolute',
    bottom: 30,
    left: 40,
    right: 40,
    fontSize: 9, 
    color: '#9ca3af', 
    textAlign: 'center',
    borderTopWidth: 1,
    borderTopColor: '#f3f4f6',
    paddingTop: 10
  },
  pageNumber: {
    marginTop: 5,
    fontSize: 8,
    color: '#d1d5db'
  }
});

interface PDFProps {
  devices: Device[];
  selectedSoftware: string[];
}

export const LaptopReport = ({ devices, selectedSoftware }: PDFProps) => {
  const minRam = devices?.length > 0 ? Math.min(...devices.map(d => d.ram || 0)) : 0;
  const minStorage = devices?.length > 0 ? Math.min(...devices.map(d => d.storage || 0)) : 0;

  return (
    <PDFDocument>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>LepiTech Hardware-Report</Text>
          <Text style={{ marginTop: 4, color: '#6b7280' }}>Dein persönlicher Hardware-Check</Text>
        </View>

        {/* Software & Anforderungen */}
        <View>
          <Text style={styles.sectionTitle}>Ausgewählte Software & Anforderungen</Text>
            <View style={styles.softwareBox}>
                <Text style={{ fontWeight: 'bold', marginBottom: 4 }}>Deine Auswahl:</Text>
                <Text style={{ 
                    color: '#374151', 
                    lineHeight: 1.4, // Bessere Lesbarkeit bei mehreren Zeilen
                    flexWrap: 'wrap'  // Zwingt den Text zum Umbruch
                }}>
                    {selectedSoftware && selectedSoftware.length > 0 
                    ? selectedSoftware.join(", ") 
                    : "Keine spezifische Software gewählt"}
                </Text>
            </View>
          <Text style={{ fontSize: 9, color: '#6b7280' }}>
            Mindestanforderungen dieser Konfiguration: RAM: {Math.round(minRam / 1024)} GB | Speicher: {minStorage >= 1000 ? `${(minStorage / 1024).toFixed(1)} TB` : `${Math.round(minStorage)} GB`}
          </Text>
        </View>

        {/* Geräte Tabelle */}
        <View>
          <Text style={styles.sectionTitle}>Empfohlene Geräte</Text>
          
          <View style={[styles.row, { backgroundColor: '#f9fafb', borderBottomWidth: 2 }]}>
            <Text style={[styles.col1, styles.cellHeader]}>Modell / Hersteller</Text>
            <Text style={[styles.col2, styles.cellHeader]}>RAM</Text>
            <Text style={[styles.col3, styles.cellHeader]}>Speicher</Text>
            <Text style={[styles.col4, styles.cellHeader]}>Preis</Text>
          </View>

          {devices.map((device) => (
            <View key={device.id} style={styles.row}>
              <Text style={styles.col1}>{device.manufacturer} {device.name}</Text>
              <Text style={styles.col2}>{Math.round(device.ram / 1024)} GB</Text>
              <Text style={styles.col3}>
                {minStorage >= 1000 ? `${(minStorage / 1024).toFixed(1)} TB` : `${Math.round(minStorage)} GB`}
              </Text>
              <Text style={styles.col4}>
                {((device.price ?? 0)).toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })}
              </Text>
            </View>
          ))}
        </View>

        {/* Footer mit Seitenzahl */}
        <View style={styles.footer} fixed>
          <Text 
            style={styles.pageNumber} 
            render={({ pageNumber, totalPages }) => `Seite ${pageNumber} von ${totalPages}`} 
          />
        </View>
      </Page>
    </PDFDocument>
  );
};