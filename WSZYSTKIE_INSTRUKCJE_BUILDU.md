# 🎯 WSZYSTKIE INSTRUKCJE - QUICK REFERENCE

## ⚡ SZYBKI START (5 MINUT)

```bash
# 1. Otwórz PowerShell w folderze projektu
cd "c:\Users\marec\OneDrive\Desktop\Phishing - Marek Piłat\phishing-education-app"

# 2. Zainstaluj
npm install

# 3. Buduj Portable EXE
npm run build-portable

# 4. Plik pojawi się w dist/CzasPhishingEdu.exe
```

---

## 📚 DOKUMENTY BUDOWANIA

| Dokument | Cel | Czas |
|----------|-----|------|
| [BUILD_PORTABLE.md](BUILD_PORTABLE.md) | Szybki build | 2 min |
| [BUILD_GUIDE.md](BUILD_GUIDE.md) | Pełny przewodnik | 20 min |
| [ELECTRON_GUIDE.md](ELECTRON_GUIDE.md) | Dla deweloperów | 30 min |
| [DISTRIBUTION.md](DISTRIBUTION.md) | Dystrybucja | 15 min |

---

## 🛠️ BUILD SKRYPTY

### Windows (Automatyczny)

```bash
# Otwórz PowerShell jako Administrator
# Uruchom:
.\build.bat

# Lub dwukliknij build.bat z Explorera
```

### Linux/Mac (Automatyczny)

```bash
chmod +x build.sh
./build.sh
```

---

## 🎮 WSZYSTKIE KOMENDY

### React

```bash
npm start                # Dev React server
npm run react-build      # Build React do /build
npm test                 # Testy
npm run eject            # Eject (nie rób!)
```

### Electron

```bash
npm run electron-dev              # Dev mode
npm run electron-build            # Build (pytaj format)
npm run electron-build-win        # Windows (NSIS)
npm run build-portable            # Windows Portable ⭐
npm run electron-build-linux      # Linux AppImage
npm run electron-build-all        # Wszystkie
```

---

## 📦 OPCJE FINALNE

### 1. Portable EXE (REKOMENDOWANA)

```bash
npm run build-portable
# → dist/CzasPhishingEdu.exe (~200 MB)
# ✅ Brak instalacji
# ✅ Zaraz uruchamianie
# ✅ Idealna dla seniorów
```

### 2. Instalator Windows (NSIS)

```bash
npm run electron-build-win
# → dist/CzasPhishingEdu Setup 1.0.0.exe (~250 MB)
# ✅ Standardowy instalator
# ✅ Start menu shortcuts
# ✅ Wymaga zatwierdzenia
```

### 3. Linux AppImage

```bash
npm run electron-build-linux
# → dist/CzasPhishingEdu.AppImage (~200 MB)
# ✅ Uniwersalny dla Linux
# ✅ Brak instalacji
# ✅ chmod +x przed użyciem
```

---

## 🔍 TROUBLESHOOTING

### Problem: npm nie znaleziono

```bash
# Zainstaluj Node.js
# https://nodejs.org/
# Uruchom PowerShell ponownie
```

### Problem: Build zawiesza się

```bash
npm cache clean --force
npm install
npm run build-portable
```

### Problem: Port 3000 zajęty

```bash
# Zamknij inne PowerShell z npm start
# Lub zmień port:
$env:PORT=3001; npm run build-portable
```

### Problem: EXE nie uruchamia się

```bash
# Sprawdź czy build/ folder istnieje
# Sprawdź czy public/electron.js jest prawidłowy
# Czytaj logów w terminalu
```

---

## 📂 STRUKTURA WYNIKÓW

```
dist/
├── CzasPhishingEdu.exe              ← Portable (główny plik)
├── CzasPhishingEdu.exe.blockmap     ← Delta updates (pomiń)
└── builder-effective-config.yaml    ← Config (pomiń)
```

---

## ✅ CHECKLIST BUDOWANIA

- [ ] Node.js zainstalowany (`node -v`)
- [ ] npm zainstalowany (`npm -v`)
- [ ] Jesteś w folderze projektu
- [ ] `npm install` uruchomiony
- [ ] Brak unsaved changes w kodzie
- [ ] Build nie zawiesza się
- [ ] Plik pojawi się w `dist/`
- [ ] Plik jest ~200-300 MB
- [ ] Testowałeś na swoim komputerze

---

## 🚀 PO BUDOWANIU

### Testowanie

```bash
# Kliknij na CzasPhishingEdu.exe
dist\CzasPhishingEdu.exe

# Czy aplikacja się uruchamia?
# Czy wszystkie scenariusze działają?
# Czy quiz działa?
```

### Offline Test

```bash
# Wyłącz internet
# Uruchom aplikację
# Czy wszystko działa?
```

### Dystrybucja

```bash
# Opcje:
1. USB stick
2. E-mail (zip)
3. OneDrive / Google Drive
4. Dysk twardy
```

---

## 📊 ROZMIARY I CZASY

| Etap | Czas | Rozmiar |
|------|------|---------|
| npm install | 3-5 min | - |
| React build | 2-3 min | 50 MB |
| Electron build | 1-2 min | 150 MB |
| Bundling | 1-2 min | - |
| **TOTAL** | **~5-8 min** | **~200 MB** |

---

## 🎯 DEFINITIVE GUIDE

### Potrzebujesz Portable EXE?

```bash
npm run build-portable
```

### Potrzebujesz Instalatora?

```bash
npm run electron-build-win
```

### Potrzebujesz Linux?

```bash
npm run electron-build-linux
```

### Potrzebujesz Wszystkiego?

```bash
npm run electron-build-all
```

---

## 📞 PYTANIA CZĘSTE

**P: Ile miejsca zajmuje EXE?**
O: ~200-300 MB

**P: Czy wymaga instalacji?**
O: NIE - portable version uruchamia się bez instalacji

**P: Czy działa offline?**
O: TAK - 100% offline

**P: Czy senior potrzebuje Windowsa?**
O: Dla Windows - TAK; Dla Linux - AppImage

**P: Czy mogę go wgrać do chmury?**
O: TAK - Google Drive, OneDrive, itp.

**P: Czy mogę go wysłać e-mailem?**
O: TAK - ale może być zblokowany; lepiej zip

**P: Jak długo budowanie?**
O: ~5-8 minut po `npm install`

---

## 🎓 NEXT STEPS

1. **Uruchom build**
   ```bash
   npm run build-portable
   ```

2. **Czekaj** ~5-8 minut

3. **Testuj** plik w `dist/`

4. **Przesyłaj** seniorom

5. **Zbieraj feedback**

---

## 💡 PRO TIPS

- Zawsze rób `npm install` po git pull
- Buduj w czystej terminalu (bez innych procesów)
- Testuj na innym komputerze jeśli możliwe
- Przygotuj zip version dla e-maila
- Utwórz folder z readme.txt dla seniora

---

## 🎉 GOTOWE!

Teraz wiesz jak zbudować `CzasPhishingEdu.exe`!

```
1. npm install
2. npm run build-portable
3. dist/CzasPhishingEdu.exe
4. Gotowe! 🎊
```

---

**Autor:** Marek Piłat
**Projekt:** CzasPhishingEdu

Czytaj [BUILD_PORTABLE.md](BUILD_PORTABLE.md) lub [DISTRIBUTION.md](DISTRIBUTION.md)!
