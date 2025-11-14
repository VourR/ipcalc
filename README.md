# My IP Calculator PWA

A Progressive Web App (PWA) for calculating and analyzing IPv4 addresses with subnet masks. This application runs completely in your browser and works offline!

## 🚀 Features

- **✨ Subnet Calculation**: Calculate network, broadcast, and host ranges instantly
- **📱 Progressive Web App**: Works offline with service workers
- **🎯 CIDR Notation Support**: Enter IP addresses with /0-32 prefix notation
- **🔒 Secure & Private**: All calculations done locally in your browser
- **⚡ Fast & Easy**: Simple, intuitive interface for quick calculations
- **📋 Copy to Clipboard**: Easily copy results to use elsewhere
- **🎨 Beautiful Design**: Modern UI with TailwindCSS
- **📲 Installable**: Install as an app on desktop, mobile, or tablet

## 📋 Requirements Met

✅ Minimal 3 navigable halaman:
- Home (Welcome page with information)
- IP Calculator (Main calculation page)
- Profile (Developer information)

✅ Navbar berisi:
- Home, IP Calculator, Profile links

✅ Halaman Home:
- Welcome page dengan fitur-fitur aplikasi
- Penjelasan CIDR notation
- Informasi common subnets

✅ Halaman Calculator:
- Form untuk IP address dan CIDR prefix
- Input validation dengan error messages yang jelas
- Output lengkap:
  - IP Address
  - Netmask
  - Wildcard
  - Network Address
  - Broadcast Address
  - Host Min (First usable IP)
  - Host Max (Last usable IP)
  - Hosts/Net (Jumlah host yang dapat digunakan)

✅ Halaman Profile:
- Nama dan NIM developer
- Informasi project
- Teknologi yang digunakan
- Instruksi PWA installation

✅ PWA Functionality:
- Service worker untuk offline support
- Manifest.json configuration
- Installable pada semua device
- Works offline untuk semua calculations
- Auto-update ketika update tersedia

## 🛠️ Technologies Used

- **React 19** - UI Framework
- **Vite 6** - Build tool & dev server
- **TailwindCSS 4** - Styling
- **Lucide React** - Beautiful icons
- **Vite PWA Plugin** - PWA configuration
- **Workbox** - Service worker caching

## 📦 Installation & Setup

### Prerequisites
- Node.js 16+ 
- npm atau yarn

### Development

1. **Clone dan navigate ke project:**
```bash
cd my-ip-pwa
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

Server akan berjalan di `http://localhost:5173`

### Build untuk Production

```bash
npm run build
```

Production build akan berada di folder `dist/`

### Preview Build

```bash
npm run preview
```

## 🔧 Project Structure

```
my-ip-pwa/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Navigation component
│   │   └── PWABadge.jsx         # PWA install badge
│   ├── pages/
│   │   ├── HomePage.jsx         # Welcome page
│   │   ├── CalculatorPage.jsx   # IP calculator page
│   │   └── ProfilePage.jsx      # Profile/Info page
│   ├── utils/
│   │   └── ipCalculator.js      # IP calculation logic
│   ├── main.jsx                 # App entry point
│   └── index.css                # Global styles
├── public/
│   ├── manifest.json            # PWA manifest
│   ├── sw.js                    # Service worker
│   ├── robots.txt               # SEO
│   └── offline.html             # Offline fallback
├── vite.config.js               # Vite + PWA configuration
├── index.html                   # HTML entry point
└── package.json                 # Dependencies

```

## 💻 How to Use

1. **Open the calculator page**
2. **Enter an IPv4 address** (e.g., 192.168.1.1)
3. **Enter a CIDR prefix** (e.g., 24)
4. **Click "Calculate Subnet"**
5. **View detailed results** with copy-to-clipboard feature

### Example Calculations

- `192.168.1.0/24` - Class C private network
- `10.0.0.0/8` - Class A private network
- `172.16.0.0/12` - Class B private network
- `8.8.8.8/32` - Single host address

## 📱 PWA Installation

### Desktop (Chrome, Edge, Brave, Opera)
1. Open the application in your browser
2. Look for the "Install" button in the address bar (if available)
3. Click it to install the app
4. The app will open in a standalone window

### Mobile (iOS/Android)
1. Open the application in your browser
2. Tap the Share button (Safari) or Menu button (Chrome)
3. Select "Add to Home Screen" or "Install App"
4. Tap the app icon to launch

## 🔌 Offline Functionality

Once installed, the app will:
- Cache all assets on first visit
- Work completely offline for calculations
- Automatically update when new versions are available
- Store data locally in browser cache

## 🧪 Testing

### Test Offline Mode
1. Install the app
2. Disconnect from internet
3. Open the app - it should still work!

### Test Calculations
```
Input: 192.168.1.0/24
Expected Output:
- Network: 192.168.1.0
- Broadcast: 192.168.1.255
- Host Min: 192.168.1.1
- Host Max: 192.168.1.254
- Usable Hosts: 254
```

## 📚 Understanding CIDR Notation

CIDR (Classless Inter-Domain Routing) notation represents:
- IP Address / Prefix Length
- Example: `192.168.1.0/24`
  - `192.168.1.0` = IP Address
  - `24` = First 24 bits are network bits
  - Remaining 8 bits are for hosts

### Common CIDR Prefixes
- `/8` - 16,777,216 addresses (Class A)
- `/16` - 65,536 addresses (Class B)
- `/24` - 256 addresses (Class C)
- `/25` - 128 addresses
- `/26` - 64 addresses
- `/27` - 32 addresses
- `/30` - 4 addresses (point-to-point)
- `/31` - 2 addresses (point-to-point)
- `/32` - 1 address (single host)

## 🐛 Troubleshooting

### App not installing?
- Use a modern browser (Chrome, Edge, Firefox, Safari iOS 15+)
- Make sure HTTPS is enabled (required for PWA)
- Clear browser cache and try again

### Calculations not working?
- Check IP format: `xxx.xxx.xxx.xxx` where each xxx is 0-255
- Check CIDR prefix: must be between 0-32
- Try the quick examples provided

### Service Worker not registering?
- Check browser console for errors
- Make sure you're using HTTPS (or localhost for dev)
- Hard refresh the page (Ctrl+Shift+R or Cmd+Shift+R)

## 📄 License

Built for educational purposes - Praktikum PPB Modul 4

## 👤 Developer

**RAJWA VOURZA TSAQIFA**
- NIM: 21120123130091
- Email: rajwa.vourza@student.university.ac.id

---

**Deployment Link**: [Link Vercel](https://tugasppb-modul4.vercel.app/)

**Last Updated**: November 2024
