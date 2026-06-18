# 🛠️ INSTRUKCJA ELECTRON - DLA DEWELOPERÓW

## Czym Jest Electron?

Electron to framework pozwalający uruchamiać aplikacje web (React) jako samodzielne aplikacje desktopowe.

```
React App + Electron = Aplikacja Desktopowa (.exe, .AppImage)
```

---

## 📂 Struktura Plików

```
phishing-education-app/
├── public/
│   ├── electron.js          ← Main Process (Electron)
│   ├── preload.js           ← Sandbox dla bezpieczeństwa
│   └── index.html           ← HTML
├── src/
│   ├── components/          ← React Komponenty
│   ├── App.jsx              ← Main App
│   └── index.js             ← React Entry
├── build/                   ← Build React (generowany)
├── dist/                    ← Final EXE (generowany)
├── package.json             ← Config (z Electron sekcją)
└── package-lock.json
```

---

## 🔄 PROCES BUDOWANIA

### 1. Development Mode

```bash
npm run electron-dev
```

Uruchamia:
- ✅ React dev server na localhost:3000
- ✅ Electron aplikacja
- ✅ DevTools dla debuggowania
- ✅ Hot reload

**Użycie:** Podczas rozwoju aplikacji

---

### 2. Production Build

```bash
npm run electron-build-win
```

Proces:
1. React build (`npm run react-build`)
   - Kompiluje React do `/build`
   - Minifikuje kod
   - Optimalizuje
   
2. Electron build (`electron-builder`)
   - Pakuje `/build` w EXE
   - Embedduje Chromium
   - Tworzy instalator

---

## 📝 Pliki Konfiguracyjne

### `public/electron.js` - Main Process

```javascript
// To jest process Electronu (Node.js + Electron API)
// Zarządza oknem aplikacji
// Obsługuje menu
// Obsługuje system operacyjny
```

**Co robi:**
- Tworzy okno BrowserWindow
- Załadowuje React app
- Zarządza app lifecycle
- Wyświetla DevTools w dev

---

### `public/preload.js` - Sandbox

```javascript
// To jest most między React (insecure) a Electron (secure)
// Umożliwia React dostęp do Electron API
// ale bezpiecznie (sandbox)
```

**Co robi:**
- Ekspozycja API dla React
- Bezpieczna komunikacja IPC
- Context isolation

---

### `package.json` - Build Config

Sekcja `build`:
```json
{
  "build": {
    "appId": "com.marekpilat.phishingedu",
    "productName": "CzasPhishingEdu",
    "win": { ... },
    "linux": { ... }
  }
}
```

**Co to konfiguruje:**
- Identyfikator aplikacji
- Nazwa produktu
- Konfiguracja dla Windows
- Konfiguracja dla Linux

---

## 🎯 RÓŻNE MODUŁY BUDOWANIA

### Windows Executable

```bash
# Portable (brak instalacji)
npm run build-portable
# → CzasPhishingEdu.exe

# NSIS Installer (z instalacją)
npm run electron-build-win
# → CzasPhishingEdu Setup 1.0.0.exe
```

### Linux

```bash
# AppImage
npm run electron-build-linux
# → CzasPhishingEdu.AppImage
```

### Wszystkie Platformy

```bash
# Windows + Linux
npm run electron-build-all
```

---

## 🐛 DEBUGOWANIE

### 1. DevTools

```bash
npm run electron-dev

# W aplikacji: F12 lub Ctrl+Shift+I
```

### 2. Main Process Logs

```javascript
// W public/electron.js
console.log('Something'); // Pojawia się w terminalu
```

### 3. Renderer Process Logs

```javascript
// W React componencie
console.log('Something'); // Pojawia się w DevTools
```

---

## 🔧 MODYFIKACJA APLIKACJI

### Zmiana Ikony (Windows)

1. Stwórz plik `icon.ico` (256x256px)
2. Umieść w `assets/` folderze
3. W `package.json` dodaj:

```json
"build": {
  "win": {
    "icon": "assets/icon.ico"
  }
}
```

### Zmiana Nazwy Aplikacji

```json
{
  "productName": "NowaProtected",
  "build": {
    "appId": "com.example.nowaprotected"
  }
}
```

### Zmiana Wersji

```json
{
  "version": "1.1.0"
}
```

---

## 📦 ZALEŻNOŚCI ELECTRON

### Instalacja

```bash
npm install electron electron-builder --save-dev
```

### Rozmiar

- **electron**: ~150-200 MB
- **electron-builder**: ~50 MB

### Gdzie Się Instalują?

```
node_modules/
├── electron/
├── electron-builder/
└── ...
```

---

## 🚀 NAJCZĘSTSZE ZADANIA

### 1. Dodaj Nowy Menu Item

W `public/electron.js`:

```javascript
{
  label: 'Moje Menu',
  submenu: [
    {
      label: 'Akcja',
      click: () => {
        mainWindow.webContents.send('my-action');
      }
    }
  ]
}
```

### 2. Wyślij Wiadomość z React do Electron

W React componencie:

```javascript
window.electron.send('my-channel', data);

window.electron.on('response', (data) => {
  console.log(data);
});
```

### 3. Dostęp Do Systemu Plików

```javascript
// W preload.js
contextBridge.exposeInMainWorld('fs', {
  readFile: (path) => require('fs').readFileSync(path, 'utf8')
});

// W React
const content = window.fs.readFile('file.txt');
```

---

## 🔍 COMMON ISSUES

### 1. "Cannot find module 'electron-is-dev'"

```bash
npm install electron-is-dev --save-dev
```

### 2. "Build zawiesza się"

```bash
# Wyczyść cache
npm cache clean --force

# Uruchom ponownie
npm run electron-build-win
```

### 3. "EXE nie uruchamia się"

- Sprawdź czy `build/` folder istnieje
- Sprawdź czy `public/electron.js` jest prawidłowy
- Sprawdź logi w terminalu

---

## 📊 ARCHITEKTURA PROCESU

```
┌─────────────────────────────────────┐
│         ELECTRON MAIN PROCESS       │
│      (Node.js + Electron API)       │
├─────────────────────────────────────┤
│  • Zarządza oknem                   │
│  • Obsługuje menu                   │
│  • Dostęp do systemu                │
│  • IPC (Inter-Process Comm)         │
└──────────────┬──────────────────────┘
               │ (IPC Bridge)
┌──────────────┴──────────────────────┐
│  PRELOAD PROCESS                    │
│  (Sandbox Bridge)                   │
├─────────────────────────────────────┤
│  • Ekspozycja API                   │
│  • Secure komunikacja               │
│  • Context Isolation                │
└──────────────┬──────────────────────┘
               │ (Safe Access)
┌──────────────┴──────────────────────┐
│  RENDERER PROCESS                   │
│  (Chromium + React)                 │
├─────────────────────────────────────┤
│  • React aplikacja                  │
│  • React Components                 │
│  • UI/UX                            │
│  • Offline działanie                │
└─────────────────────────────────────┘
```

---

## ✅ CHECKLIST PRZED BUDOWANIEM

- [ ] `package.json` ma sekcję `build`
- [ ] `public/electron.js` istnieje
- [ ] `public/preload.js` istnieje
- [ ] React komponentów nie mają errorsów (`npm start` działa)
- [ ] Wszystkie zależności zainstalowane (`npm install`)
- [ ] Nie ma unsaved changes w plikach

---

## 🎓 LEARNING RESOURCES

- [Electron Docs](https://www.electronjs.org/docs)
- [Electron Builder Docs](https://www.electron.build/)
- [React + Electron](https://www.freecodecamp.org/news/building-an-electron-application-with-create-react-app-17a59c481d50/)

---

## 💡 TIPS & TRICKS

### 1. Szybki Portable Build

```bash
npm run build-portable
# ~5-8 minut
```

### 2. Używaj `wait-on` do sync

```bash
# W dev mode - czeka aż React server uruchomi się
wait-on http://localhost:3000
```

### 3. Cache Cleaning

```bash
npm cache clean --force
```

---

## 🎯 FINAL BUILD COMMANDS

```bash
# Development
npm run electron-dev

# Production - Portable EXE
npm run build-portable

# Production - NSIS Installer
npm run electron-build-win

# Production - Linux AppImage
npm run electron-build-linux

# Production - Wszystkie Platformy
npm run electron-build-all
```

---

**Autor:** Marek Piłat
**Projekt:** CzasPhishingEdu

Następny krok? Przeczytaj [BUILD_GUIDE.md](BUILD_GUIDE.md) lub [BUILD_PORTABLE.md](BUILD_PORTABLE.md)!
