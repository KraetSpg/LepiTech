import { db } from '../db';
import { softwareTable, InsertSoftware, SelectSoftware, devicesTable } from './schema';

async function seedSoftware() {
    // Clear the whole table to assign the same ids to the softwares
    await db.delete(softwareTable);

    await db.insert(softwareTable).values([
        // --- MEDIA / CREATIVE ---
        {
            id: 1,
            name: "Adobe Photoshop 2025",
            cpu_cores: 4,                 // 4+ cores common for smooth work
            cpu_frequency: 2.5,           // 2+ GHz 64‑bit CPU [web:43][web:36]
            ram: 1024 * 8,                // 8 GB min, 16 GB recommended [web:43]
            os: "Windows",
            storage: 5,                   // ~5 GB app + cache [web:43]
            categories: "design & medien"
        },
        {
            id: 2,
            name: "Adobe Lightroom Classic 2025",
            cpu_cores: 4,
            cpu_frequency: 2.5,
            ram: 1024 * 8,                // 8 GB min typical for Lightroom
            os: "Windows",
            storage: 3,                   // a few GB + catalog/cache
            categories: "design & medien"
        },
        {
            id: 3,
            name: "GIMP 2.10 (2025)",
            cpu_cores: 2,
            cpu_frequency: 2.0,           // modest 64‑bit CPU is enough
            ram: 1024 * 4,                // 4 GB min typical
            os: "Windows",
            storage: 1,                   // ~200–500 MB install
            categories: "design & medien"
        },
        {
            id: 4,
            name: "Adobe Premiere Pro 2025",
            cpu_cores: 6,                 // 6+ cores strongly recommended
            cpu_frequency: 3.0,           // 6th gen i5+/Ryzen 5+ class [web:41][web:44]
            ram: 1024 * 16,               // 16 GB for HD, 32 GB for 4K [web:41][web:44]
            os: "Windows",
            storage: 8,                   // base install (media on separate drives) [web:44]
            categories: "design & medien"
        },
        {
            id: 5,
            name: "DaVinci Resolve 19",
            cpu_cores: 8,
            cpu_frequency: 3.0,           // multi‑core CPU recommended
            ram: 1024 * 16,               // 16 GB min, more for Fusion/4K
            os: "Windows",
            storage: 10,                  // app + cache
            categories: "design & medien"
        },
        {
            id: 6,
            name: "Adobe After Effects 2025",
            cpu_cores: 8,
            cpu_frequency: 3.0,           // many cores & high clock
            ram: 1024 * 16,               // 16 GB min, 32+ GB recommended
            os: "Windows",
            storage: 15,                  // app plus disk cache
            categories: "design & medien"
        },
        {
            id: 7,
            name: "Blender 4.2 LTS",
            cpu_cores: 4,
            cpu_frequency: 3.0,
            ram: 1024 * 8,                // 8 GB minimum, more for big scenes
            os: "Windows",
            storage: 2,
            categories: "design & medien"
        },
        {
            id: 8,
            name: "Avid Media Composer 2025",
            cpu_cores: 6,
            cpu_frequency: 3.0,
            ram: 1024 * 16,               // around 16 GB for HD editing
            os: "Windows",
            storage: 8,
            categories: "design & medien"
        },
        {
            id: 9,
            name: "Adobe Illustrator 2025",
            cpu_cores: 4,
            cpu_frequency: 2.5,
            ram: 1024 * 8,                // similar to Photoshop [web:43]
            os: "Windows",
            storage: 3,
            categories: "design & medien"
        },
        {
            id: 10,
            name: "Adobe InDesign 2025",
            cpu_cores: 4,
            cpu_frequency: 2.0,
            ram: 1024 * 8,                // 8 GB min for layout work
            os: "Windows",
            storage: 3,
            categories: "design & medien"
        },

        // --- OFFICE / BUSINESS ---

        {
            id: 11,
            name: "Microsoft Word (Microsoft 365)",
            cpu_cores: 2,
            cpu_frequency: 1.6,           // 1.6+ GHz, 2 cores [web:42][web:45]
            ram: 1024 * 4,                // 4 GB for 64‑bit [web:42][web:45]
            os: "Windows 10/11",
            storage: 4,                   // Office install shared [web:42][web:45]
            categories: "office"
        },
        {
            id: 12,
            name: "Microsoft Excel (Microsoft 365)",
            cpu_cores: 2,
            cpu_frequency: 1.6,
            ram: 1024 * 4,
            os: "Windows 10/11",
            storage: 4,
            categories: "office"
        },
        {
            id: 13,
            name: "Microsoft PowerPoint (Microsoft 365)",
            cpu_cores: 2,
            cpu_frequency: 1.6,
            ram: 1024 * 4,
            os: "Windows 10/11",
            storage: 4,
            categories: "office"
        },
        {
            id: 14,
            name: "Microsoft Outlook (Microsoft 365)",
            cpu_cores: 2,
            cpu_frequency: 1.6,
            ram: 1024 * 4,
            os: "Windows 10/11",
            storage: 4,
            categories: "office, kommunikation"
        },
        {
            id: 15,
            name: "LibreOffice 24.x",
            cpu_cores: 2,
            cpu_frequency: 2.0,
            ram: 1024 * 4,                // 4 GB enough for typical docs
            os: "Windows 10/11",
            storage: 2,
            categories: "office"
        },
        {
            id: 16,
            name: "SAP GUI for Windows 8.0",
            cpu_cores: 2,
            cpu_frequency: 2.0,
            ram: 1024 * 8,                // 8 GB typical for SAP client setups
            os: "Windows",
            storage: 5,
            categories: "office"
        },
        {
            id: 17,
            name: "SAP Business Client 8.0",
            cpu_cores: 2,
            cpu_frequency: 2.0,
            ram: 1024 * 8,
            os: "Windows",
            storage: 5,
            categories: "office"
        },
        {
            id: 18,
            name: "Slack Desktop 2025",
            cpu_cores: 2,
            cpu_frequency: 2.0,
            ram: 1024 * 4,
            os: "Windows",
            storage: 1,
            categories: "kommunikation"
        },
        {
            id: 19,
            name: "Microsoft Teams (Desktop)",
            cpu_cores: 2,
            cpu_frequency: 1.6,
            ram: 1024 * 4,                // Teams often needs 4 GB+
            os: "Windows",
            storage: 3,
            categories: "kommunikation"
        },
        {
            id: 20,
            name: "Zoom Desktop Client",
            cpu_cores: 2,
            cpu_frequency: 2.0,
            ram: 1024 * 4,
            os: "Windows",
            storage: 1,
            categories: "kommunikation"
        },

        // --- PROGRAMMING ---

        {
            id: 21,
            name: "Visual Studio Code 2025",
            cpu_cores: 2,
            cpu_frequency: 1.6,
            ram: 1024 * 4,                // 4 GB typical for VSCode
            os: "Windows",
            storage: 2,                   // lightweight, ~1.5-2 GB
            categories: "programmierung"
        },
        {
            id: 22,
            name: "Visual Studio Professional 2022",
            cpu_cores: 4,
            cpu_frequency: 2.5,
            ram: 1024 * 8,                // 8 GB minimum for VS Pro
            os: "Windows",
            storage: 10,                  // ~8-10 GB installation
            categories: "programmierung"
        },
        {
            id: 23,
            name: "JetBrains IntelliJ IDEA Ultimate",
            cpu_cores: 4,
            cpu_frequency: 2.5,
            ram: 1024 * 8,                // 8 GB recommended
            os: "Windows",
            storage: 3,                   // ~2-3 GB app
            categories: "programmierung"
        },
        {
            id: 24,
            name: "PyCharm Professional",
            cpu_cores: 4,
            cpu_frequency: 2.5,
            ram: 1024 * 8,                // 8 GB recommended for Python development
            os: "Windows",
            storage: 2,                   // ~2 GB installation
            categories: "programmierung"
        },
        {
            id: 25,
            name: "WebStorm 2025",
            cpu_cores: 4,
            cpu_frequency: 2.5,
            ram: 1024 * 8,                // 8 GB for web development
            os: "Windows",
            storage: 2,
            categories: "programmierung"
        },
        {
            id: 26,
            name: "Git for Windows",
            cpu_cores: 2,
            cpu_frequency: 1.6,
            ram: 1024 * 2,                // minimal requirements
            os: "Windows",
            storage: 1,                   // ~300 MB
            categories: "programmierung"
        },
        {
            id: 27,
            name: "Docker Desktop for Windows",
            cpu_cores: 4,
            cpu_frequency: 2.5,
            ram: 1024 * 8,                // 8 GB minimum with WSL2
            os: "Windows",
            storage: 5,                   // ~5 GB for installation and images
            categories: "programmierung"
        },
        {
            id: 28,
            name: "Postman 2025",
            cpu_cores: 2,
            cpu_frequency: 2.0,
            ram: 1024 * 4,                // 4 GB for API testing
            os: "Windows",
            storage: 2,                   // ~1.5-2 GB
            categories: "programmierung"
        },

        // --- CAD SOFTWARE ---

        {
            id: 29,
            name: "AutoCAD 2025",
            cpu_cores: 4,
            cpu_frequency: 2.5,
            ram: 1024 * 8,                // 8 GB minimum, 16 GB recommended
            os: "Windows",
            storage: 6,                   // ~6 GB installation
            categories: "cad-software"
        },
        {
            id: 30,
            name: "SolidWorks 2024-2025",
            cpu_cores: 6,
            cpu_frequency: 2.5,
            ram: 1024 * 16,               // 16 GB minimum, 32 GB for complex models
            os: "Windows",
            storage: 15,                  // ~12-15 GB installation
            categories: "cad-software"
        },
        {
            id: 31,
            name: "Fusion 360 (Cloud-based)",
            cpu_cores: 4,
            cpu_frequency: 2.5,
            ram: 1024 * 8,                // 8 GB for smooth operation
            os: "Windows",
            storage: 3,                   // ~2-3 GB client
            categories: "cad-software"
        },
        {
            id: 32,
            name: "FreeCAD 0.22",
            cpu_cores: 2,
            cpu_frequency: 2.0,
            ram: 1024 * 4,                // 4 GB minimum
            os: "Windows",
            storage: 1,                   // ~800 MB - 1 GB
            categories: "cad-software"
        },
        {
            id: 33,
            name: "DraftSight 2024",
            cpu_cores: 2,
            cpu_frequency: 2.0,
            ram: 1024 * 4,                // 4 GB
            os: "Windows",
            storage: 3,                   // ~2-3 GB
            categories: "cad-software"
        },
        {
            id: 34,
            name: "LibreCAD 2.2",
            cpu_cores: 2,
            cpu_frequency: 2.0,
            ram: 1024 * 2,                // 2 GB minimum
            os: "Windows",
            storage: 1,                   // ~500 MB - 1 GB
            categories: "cad-software"
        },
        {
            id: 35,
            name: "SketchUp Pro 2024",
            cpu_cores: 4,
            cpu_frequency: 2.5,
            ram: 1024 * 8,                // 8 GB recommended
            os: "Windows",
            storage: 2,                   // ~2 GB installation
            categories: "cad-software"
        }
    ]);
}

async function seedDevices() {
    await db.delete(devicesTable);

    await db.insert(devicesTable).values([
        // ===== HIGH END (5) =====
        {
            name: "Acer Predator Helios 18 (RTX 4080)",
            os: "Windows",
            cpu_cores: 24,            // i9‑14900HX, 8P+16E [web:78][web:86]
            cpu_frequency: 5.6,       // boost up to ~5.6 GHz [web:78]
            storage: 2048,            // 2 TB SSD [web:76][web:77]
            ram: 32 * 1024,           // 32 GB
            manufacturer: "Acer",
            price: 4500               // ~4.5k € creator/gaming configs [web:76][web:79]
        },
        {
            name: "ASUS ROG Strix SCAR 18 (2024)",
            os: "Windows",
            cpu_cores: 24,            // i9‑14900HX [web:78]
            cpu_frequency: 5.6,
            storage: 2000,            // 2 TB SSD
            ram: 32 * 1024,           // 32 GB
            manufacturer: "ASUS",
            price: 3800
        },
        {
            name: "MSI Raider GE78 HX",
            os: "Windows",
            cpu_cores: 24,            // high‑end i9 HX series
            cpu_frequency: 5.5,
            storage: 2000,
            ram: 32 * 1024,
            manufacturer: "MSI",
            price: 3600
        },
        {
            name: "Razer Blade 16 (RTX 4080)",
            os: "Windows",
            cpu_cores: 24,
            cpu_frequency: 5.5,
            storage: 1000,
            ram: 32 * 1024,
            manufacturer: "Razer",
            price: 4200
        },
        {
            name: "Gigabyte AERO 16 OLED (Creator)",
            os: "Windows",
            cpu_cores: 14,            // i7/i9 H‑series
            cpu_frequency: 5.0,
            storage: 2000,
            ram: 32 * 1024,
            manufacturer: "Gigabyte",
            price: 2600
        },

        // ===== MID TIER (5) =====
        {
            name: "ASUS TUF Gaming A15 (2024)",
            os: "Windows",
            cpu_cores: 8,             // Ryzen 7/9 7xxxH [web:84][web:90]
            cpu_frequency: 5.1,
            storage: 1000,            // 1 TB SSD [web:81][web:90]
            ram: 16 * 1024,           // 16 GB
            manufacturer: "ASUS",
            price: 1200               // ~1.0–1.3k € with RTX 4060 [web:81][web:90]
        },
        {
            name: "MSI Katana 15 (RTX 4060)",
            os: "Windows",
            cpu_cores: 10,            // i7‑13620H class [web:81]
            cpu_frequency: 4.9,
            storage: 1000,
            ram: 16 * 1024,
            manufacturer: "MSI",
            price: 1300
        },
        {
            name: "HP Victus 16 (RTX 4060)",
            os: "Windows",
            cpu_cores: 20,            // i7‑14700HX 20C/28T [web:87]
            cpu_frequency: 5.4,
            storage: 512,
            ram: 16 * 1024,
            manufacturer: "HP",
            price: 1200
        },
        {
            name: "Lenovo LOQ 15 (RTX 4060)",
            os: "Windows",
            cpu_cores: 8,
            cpu_frequency: 5.0,
            storage: 512,
            ram: 16 * 1024,
            manufacturer: "Lenovo",
            price: 1100
        },
        {
            name: "Acer Nitro 16 (RTX 4060)",
            os: "Windows",
            cpu_cores: 16,            // Ryzen 9 7940HX / similar [web:81]
            cpu_frequency: 5.2,
            storage: 1000,
            ram: 32 * 1024,           // some configs
            manufacturer: "Acer",
            price: 1400
        },

        // ===== LOW BUDGET (5) =====
        {
            name: "MSI Thin 15 (RTX 3050)",
            os: "Windows",
            cpu_cores: 8,             // i5‑13420H, 8C/12T [web:82]
            cpu_frequency: 4.6,
            storage: 512,
            ram: 16 * 1024,           // 16 GB [web:82]
            manufacturer: "MSI",
            price: 800                // ~760 USD range [web:82][web:94]
        },
        {
            name: "ASUS TUF Gaming F15 (RTX 3050)",
            os: "Windows",
            cpu_cores: 8,
            cpu_frequency: 4.5,
            storage: 512,
            ram: 8 * 1024,
            manufacturer: "ASUS",
            price: 750
        },
        {
            name: "Lenovo IdeaPad Gaming 3 (RTX 3050)",
            os: "Windows",
            cpu_cores: 6,
            cpu_frequency: 4.2,
            storage: 512,
            ram: 8 * 1024,
            manufacturer: "Lenovo",
            price: 700
        },
        {
            name: "HP Pavilion Gaming 15 (GTX/RTX Entry)",
            os: "Windows",
            cpu_cores: 6,
            cpu_frequency: 4.0,
            storage: 512,
            ram: 8 * 1024,
            manufacturer: "HP",
            price: 650
        },
        {
            name: "Acer Aspire 7 (GTX/RTX Entry)",
            os: "Windows",
            cpu_cores: 6,
            cpu_frequency: 4.2,
            storage: 512,
            ram: 8 * 1024,
            manufacturer: "Acer",
            price: 650
        },
        {
            name: "XMG Neo 15 M22",
            os: "Windows",
            cpu_cores: 8,              // Ryzen 9 6900HX, 8C/16T [web:57][web:72]
            cpu_frequency: 4.9,        // boost up to ~4.9 GHz [web:57]
            storage: 1024,             // 1 TB SSD typical [web:66][web:69]
            ram: 32 * 1024,            // 32 GB DDR5 [web:66][web:69]
            manufacturer: "XMG",
            price: 2200                // ~2.1–2.3k € for high-end config [web:59][web:69]
        },
        {
            name: "Dell XPS 15 9530",
            os: "Windows",
            cpu_cores: 14,             // i7‑13700H, 6P+8E cores [web:64][web:67]
            cpu_frequency: 5.0,        // turbo up to ~5.0 GHz [web:64]
            storage: 1024,             // 1 TB NVMe SSD [web:64][web:67]
            ram: 16 * 1024,            // 16 GB DDR5 [web:64][web:67]
            manufacturer: "Dell",
            price: 2300                // ~2.3k € for creator configs [web:64][web:73]
        },
        {
            name: "HP Omen 16 2025",
            os: "Windows",
            cpu_cores: 16,             // Ryzen 9 8940HX, 16C/32T [web:62][web:65]
            cpu_frequency: 5.3,        // boost up to ~5.3 GHz [web:62]
            storage: 1024,             // 1 TB SSD [web:62]
            ram: 32 * 1024,            // 32 GB DDR5 [web:62][web:65]
            manufacturer: "HP",
            price: 1700                // ~1.6–1.8k USD street [web:62][web:65]
        },
        {
            name: "Lenovo Legion 5 Pro 16",
            os: "Windows",
            cpu_cores: 8,              // e.g. Ryzen 7 7840HS / i7‑13700H class
            cpu_frequency: 5.0,
            storage: 1024,
            ram: 16 * 1024,
            manufacturer: "Lenovo",
            price: 1600
        },
        {
            name: "ASUS ProArt Studiobook 16",
            os: "Windows",
            cpu_cores: 12,             // creator‑class Intel/AMD CPU
            cpu_frequency: 4.7,
            storage: 2048,             // 2 TB SSD for media projects
            ram: 32 * 1024,            // 32 GB for Photoshop/Premiere/AE
            manufacturer: "ASUS",
            price: 2800
        },
        {
            name: "Apple MacBook Pro 14 M3",
            os: "macOS",
            cpu_cores: 8,              // 8‑core CPU in base M3
            cpu_frequency: 3.7,        // effective peak (abstracted)
            storage: 512,
            ram: 8 * 1024,
            manufacturer: "Apple",
            price: 1600
        },
        {
            name: "Apple MacBook Pro 16 M3 Pro",
            os: "macOS",
            cpu_cores: 12,             // M3 Pro 12‑core CPU
            cpu_frequency: 4.0,
            storage: 1024,
            ram: 18 * 1024,            // 18 GB unified
            manufacturer: "Apple",
            price: 2600
        },
        {
            name: "HP EliteBook 840 G11",
            os: "Windows",
            cpu_cores: 10,             // Intel Core Ultra / 10–12 cores
            cpu_frequency: 4.5,
            storage: 512,
            ram: 16 * 1024,
            manufacturer: "HP",
            price: 1400
        },
        {
            name: "Lenovo ThinkPad T14 Gen 5",
            os: "Windows",
            cpu_cores: 8,
            cpu_frequency: 4.7,
            storage: 512,
            ram: 16 * 1024,
            manufacturer: "Lenovo",
            price: 1500
        },
        {
            name: "Dell Latitude 7440",
            os: "Windows",
            cpu_cores: 10,
            cpu_frequency: 4.7,
            storage: 512,
            ram: 16 * 1024,
            manufacturer: "Dell",
            price: 1500
        }
    ]);
}
async function clearAndSeed() {
    await seedSoftware();
    await seedDevices();
}

clearAndSeed().catch(console.error);