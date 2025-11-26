import { db } from '../db';
import { software, InsertSoftware, SelectSofware, categories, softwareCategories } from './schema';

db.delete(softwareCategories);

async function seedSoftware() {
    // Clear the whole table to assign the same ids to the softwares
    await db.delete(software);

    await db.insert(software).values({
        id: 1,
        name: "AutoCAD 2025",
        cpu: "2,5–2,9 GHz oder mehr, 8+ Kerne empfohlen",
        ram: 1024 * 8,
        os: "Windows 10/11 64-bit",
        storage: 6
    })
    await db.insert(software).values({
        id: 2,
        name: "SOLIDWORKS 2025",
        cpu: "Intel/AMD x86_64, 4 Kerne+, 3+ GHz empfohlen",
        ram: 1024 * 16,
        os: "Windows 10/11 64-bit",
        storage: 10
    })
    await db.insert(software).values({
        id: 3,
        name: "ANSYS 2025",
        cpu: "Multi-Core CPU (64-bit) empfohlen",
        ram: 1024 * 32,
        os: "Windows 11, RHEL 9.x, Rocky Linux",
        storage: 256
    })
    await db.insert(software).values({
        id: 4,
        name: "Simul8 2025",
        cpu: "i3 Single Core oder gleichwertig",
        ram: 1024 * 1,
        os: "Windows 10/11, macOS",
        storage: 1
    })
    await db.insert(software).values({
        id: 5,
        name: "FlexSim 2025",
        cpu: "64-bit Intel/AMD, produziert ab 2020",
        ram: 1024 * 4,
        os: "Windows 10/11 64-bit",
        storage: 2
    })
    await db.insert(software).values({
        id: 6,
        name: "Siemens NX 2025",
        cpu: "Multi-Core Intel/AMD (empfohlen i7/i9)",
        ram: 1024 * 16,
        os: "Windows 10/11 64-bit",
        storage: 20
    })
    await db.insert(software).values({
        id: 7,
        name: "MATLAB 2025",
        cpu: "Any x64 processor",
        ram: 1024 * 8,
        os: "Windows 10/11, macOS, Linux",
        storage: 10
    })
    await db.insert(software).values({
        id: 8,
        name: "CATIA",
        cpu: "Intel/AMD, 3+ GHz empfohlen",
        ram: 1024 * 8,
        os: "Windows 10/11 64-bit",
        storage: 10
    })
    await db.insert(software).values({
        id: 9,
        name: "Tekla Structures",
        cpu: "Quad-Core CPU oder besser",
        ram: 1024 * 16,
        os: "Windows 10/11",
        storage: 5
    })
    await db.insert(software).values({
        id: 10,
        name: "Revit 2025",
        cpu: "2,5+ GHz empfohlen",
        ram: 1024 * 16,
        os: "Windows 10/11 64-bit",
        storage: 30
    })
    await db.insert(software).values({
        id: 11,
        name: "Fusion 360",
        cpu: "64-bit CPU, 2,5 GHz+ empfohlen",
        ram: 1024 * 4,
        os: "Windows 10/11, macOS",
        storage: 3
    })
    await db.insert(software).values({
        id: 12,
        name: "Civil 3D",
        cpu: "2,5 GHz+ empfohlen",
        ram: 1024 * 8,
        os: "Windows 10/11 64-bit",
        storage: 20
    })
    await db.insert(software).values({
        id: 13,
        name: "Altium Designer",
        cpu: "Multi-Core CPU empfohlen",
        ram: 1024 * 16,
        os: "Windows 10/11",
        storage: 10
    })
    await db.insert(software).values({
        id: 14,
        name: "PowerFactory",
        cpu: "Multi-Core, 4+ Kerne",
        ram: 1024 * 8,
        os: "Windows 10/11 64-bit",
        storage: 10
    })
    await db.insert(software).values({
        id: 15,
        name: "COMSOL Multiphysics® 6.4",
        cpu: "Intel/AMD x64",
        ram: 1024 * 4,
        os: "Windows 11, 64-bit, Linux, macOS",
        storage: 25
    })
}

async function seedCategories() {
    await db.delete(categories);
    await db.insert(categories).values({
        id: 1,
        name: "CAD-Entwickler",
    })

    // Insert Relation for this Category to have Softwares in it
    await db.insert(softwareCategories).values({
        softwareId: 1,
        categoryId: 1
    });
    await db.insert(softwareCategories).values({
        softwareId: 2,
        categoryId: 1
    });
    await db.insert(softwareCategories).values({
        softwareId: 3,
        categoryId: 1
    })
    await db.insert(softwareCategories).values({
        softwareId: 4,
        categoryId: 1
    })
}

async function clearAndSeed() {
  await db.delete(softwareCategories);
  await seedSoftware();
  await seedCategories();
}

clearAndSeed().catch(console.error);