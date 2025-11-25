import { db } from '../db';
import { software, InsertSoftware, SelectSofware } from './schema';

export async function seedSoftware() {
    await db.insert(software).values({
        name: "AutoCAD 2025",
        cpu: "2,5–2,9 GHz oder mehr, 8+ Kerne empfohlen",
        ram: 1024 * 8,
        os: "Windows 10/11 64-bit",
        storage: 6
    })
    await db.insert(software).values({
        name: "SOLIDWORKS 2025",
        cpu: "Intel/AMD x86_64, 4 Kerne+, 3+ GHz empfohlen",
        ram: 1024 * 16,
        os: "Windows 10/11 64-bit",
        storage: 10
    })
    await db.insert(software).values({
        name: "ANSYS 2025",
        cpu: "Multi-Core CPU (64-bit) empfohlen",
        ram: 1024 * 32,
        os: "Windows 11, RHEL 9.x, Rocky Linux",
        storage: 256
    })
    await db.insert(software).values({
        name: "Simul8 2025",
        cpu: "i3 Single Core oder gleichwertig",
        ram: 1024 * 1,
        os: "Windows 10/11, macOS",
        storage: 0.2
    })
    await db.insert(software).values({
        name: "FlexSim 2025",
        cpu: "64-bit Intel/AMD, produziert ab 2020",
        ram: 1024 * 4,
        os: "Windows 10/11 64-bit",
        storage: 1.2
    })
    await db.insert(software).values({
        name: "Siemens NX 2025",
        cpu: "Multi-Core Intel/AMD (empfohlen i7/i9)",
        ram: 1024 * 16,
        os: "Windows 10/11 64-bit",
        storage: 20
    })
    await db.insert(software).values({
        name: "MATLAB 2025",
        cpu: "Any x64 processor",
        ram: 1024 * 8,
        os: "Windows 10/11, macOS, Linux",
        storage: 10
    })
    await db.insert(software).values({
        name: "CATIA",
        cpu: "Intel/AMD, 3+ GHz empfohlen",
        ram: 1024 * 8,
        os: "Windows 10/11 64-bit",
        storage: 10
    })
    await db.insert(software).values({
        name: "Tekla Structures",
        cpu: "Quad-Core CPU oder besser",
        ram: 1024 * 16,
        os: "Windows 10/11",
        storage: 5
    })
    await db.insert(software).values({
        name: "Revit 2025",
        cpu: "2,5+ GHz empfohlen",
        ram: 1024 * 16,
        os: "Windows 10/11 64-bit",
        storage: 30
    })
    await db.insert(software).values({
        name: "Fusion 360",
        cpu: "64-bit CPU, 2,5 GHz+ empfohlen",
        ram: 1024 * 4,
        os: "Windows 10/11, macOS",
        storage: 3
    })
    await db.insert(software).values({
        name: "Civil 3D",
        cpu: "2,5 GHz+ empfohlen",
        ram: 1024 * 8,
        os: "Windows 10/11 64-bit",
        storage: 20
    })
    await db.insert(software).values({
        name: "Altium Designer",
        cpu: "Multi-Core CPU empfohlen",
        ram: 1024 * 16,
        os: "Windows 10/11",
        storage: 10
    })
    await db.insert(software).values({
        name: "PowerFactory",
        cpu: "Multi-Core, 4+ Kerne",
        ram: 1024 * 8,
        os: "Windows 10/11 64-bit",
        storage: 10
    })
    await db.insert(software).values({
        name: "COMSOL Multiphysics® 6.4",
        cpu: "Intel/AMD x64",
        ram: 1024 * 4,
        os: "Windows 11, 64-bit, Linux, macOS",
        storage: 25
    })
    await db.insert(software).values({
        name: "STAAD.Pro",
        cpu: "Intel/AMD, 2,5 GHz+",
        ram: 1024 * 8,
        os: "Windows 10/11",
        storage: 7
    })
    await db.insert(software).values({
        name: "Solid Edge",
        cpu: "Multi-Core Intel/AMD, 3+ GHz empfohlen",
        ram: 1024 * 8,
        os: "Windows 10/11",
        storage: 10
    })
    await db.insert(software).values({
        name: "PTC Creo",
        cpu: "Multi-Core Intel/AMD, 3 GHz+ empfohlen",
        ram: 1024 * 16,
        os: "Windows 10/11",
        storage: 12
    })
    await db.insert(software).values({
        name: "ArchiCAD",
        cpu: "Intel/AMD, 3 GHz+ empfohlen",
        ram: 1024 * 8,
        os: "Windows 10/11, macOS",
        storage: 5
    })
    await db.insert(software).values({
        name: "Navisworks",
        cpu: "Multi-Core CPU empfohlen",
        ram: 1024 * 16,
        os: "Windows 10/11",
        storage: 10
    })
    await db.insert(software).values({
        name: "Inventor",
        cpu: "Intel/AMD, 3 GHz+ empfohlen",
        ram: 1024 * 16,
        os: "Windows 10/11 64-bit",
        storage: 40
    })
    await db.insert(software).values({
        name: "Microstation",
        cpu: "Multi-Core Intel/AMD",
        ram: 1024 * 8,
        os: "Windows 10/11",
        storage: 10
    })
    await db.insert(software).values({
        name: "Simcenter",
        cpu: "Multi-Core x64 CPU",
        ram: 1024 * 8,
        os: "Windows 10/11",
        storage: 30
    })
    await db.insert(software).values({
        name: "SimScale",
        cpu: "Cloud-basiert, Webbrowser",
        ram: 1024 * 4,
        os: "Windows, macOS, Linux",
        storage: 0
    })
    await db.insert(software).values({
        name: "PowerWorld Simulator",
        cpu: "Multi-Core CPU empfohlen",
        ram: 1024 * 4,
        os: "Windows 10/11",
        storage: 2
    })
    await db.insert(software).values({
        name: "PSCAD",
        cpu: "Multi-Core Intel/AMD",
        ram: 1024 * 16,
        os: "Windows 10/11",
        storage: 10
    })
    await db.insert(software).values({
        name: "LabVIEW",
        cpu: "Multi-Core Intel/AMD",
        ram: 1024 * 4,
        os: "Windows 10/11",
        storage: 10
    })
    await db.insert(software).values({
        name: "ETAP",
        cpu: "Multi-Core Intel/AMD",
        ram: 1024 * 8,
        os: "Windows 10/11",
        storage: 10
    })
    await db.insert(software).values({
        name: "Simulink (MATLAB)",
        cpu: "Multi-Core x64",
        ram: 1024 * 8,
        os: "Windows 10/11, macOS, Linux",
        storage: 10
    })
    await db.insert(software).values({
        name: "BIM 360",
        cpu: "Cloud/Webbrowser",
        ram: 1024 * 4,
        os: "Windows, macOS",
        storage: 0
    })
}