# ⚡ ZARAZ ZRÓ TO - INSTRUKCJA NA DZIŚ

## 🎯 CEL DZISIEJSZY

Zbudować plik `CzasPhishingEdu.exe` - samodzielną aplikację desktopową.

---

## ⏱️ CZAS

- **Rzeczywisty czas pracy:** ~2-3 minuty
- **Czas czekania na build:** ~5-8 minut
- **RAZEM:** ~10 minut

---

## 📝 KROKI DO WYKONANIA

### KROK 1: Otwórz PowerShell

```
1. Kliknij Start (ikona Windows)
2. Wpisz: PowerShell
3. Kliknij PowerShell
4. Pojawi się czarne okno
```

### KROK 2: Przejdź Do Folderu Projektu

```powershell
cd "c:\Users\marec\OneDrive\Desktop\Phishing - Marek Piłat\phishing-education-app"
```

**Potem naciśnij Enter**

Powinno pokazać:
```
PS C:\Users\marec\OneDrive\Desktop\Phishing - Marek Piłat\phishing-education-app>
```

### KROK 3: Sprawdź Node.js

```powershell
node -v
npm -v
```

Powinno pokazać:
```
v14.x.x lub nowsza
6.x.x lub nowsza
```

Jeśli pokazuje błąd:
- Zainstaluj Node.js z https://nodejs.org/
- Uruchom PowerShell ponownie

### KROK 4: Zainstaluj Zależności

```powershell
npm install
```

**Czekaj 3-5 minut** - będzie wiele linii tekstu

Powinno zakończyć się:
```
added XXX packages in Xm Xs
```

### KROK 5: Buduj Aplikację

```powershell
npm run build-portable
```

**Czekaj 5-8 minut** - będzie wiele linii tekstu

Powinno zakończyć się:
```
Building     ✓
Building AppImage
✓ electron-builder version=24.x.x
✓ saving to ... dist
```

---

## ✅ SPRAWDZENIA

Po zakończeniu `npm run build-portable`:

### Sprawdzenie 1: Czy Plik Istnieje?

```powershell
dir dist
```

Powinieneś widzieć:
```
CzasPhishingEdu.exe
```

### Sprawdzenie 2: Jaki Jest Rozmiar?

```powershell
ls -l dist\CzasPhishingEdu.exe
```

Powinno być: **~200-300 MB**

### Sprawdzenie 3: Czy Plik Działa?

```powershell
# Dwukliknij CzasPhishingEdu.exe z Explorera
dist\CzasPhishingEdu.exe
```

Powinno:
1. Pojawiła się czarna konsola
2. Po 2-3 sekundach uruchomiła się aplikacja
3. Widać Start page
4. Wszystko działa

---

## 🎯 CO POTEM?

### Test 1: Menu

```
Kliknij "START" → "Dalej" → Główne menu
Powinna być lista opcji
```

### Test 2: Scenariusz

```
Kliknij "Scenariusze" → wybrać scenariusz
Powinna być interaktywna forma
```

### Test 3: Quiz

```
Kliknij "Quiz" → odpowiadaj pytania
Powinna być ocena
```

### Test 4: Offline

```
1. Wyłącz WiFi / Ethernet
2. Uruchom aplikację ponownie
3. Wszystko powinno działać identycznie
```

---

## 🚀 GOTOWY PLIK

Gdy testy przejdą:

```
✅ dist\CzasPhishingEdu.exe

To jest GOTOWY plik do dystrybucji!
```

---

## 📦 NASTĘPNIE MOŻESZ:

### Opcja 1: Wysłać na USB

```
1. Włóż USB stick (500 MB min)
2. Skopiuj CzasPhishingEdu.exe
3. Daj USB seniorowi
4. Senior włoży do komputera
5. Kliknie na plik → Gotowe!
```

### Opcja 2: Wysłać E-mailem

```
1. Kliknij prawo na CzasPhishingEdu.exe
2. Send to → Compressed (zipped) folder
3. Pojawi się CzasPhishingEdu.zip (~150 MB)
4. Wyślij zip e-mailem
5. Senior rozpakuje → kliknie → Gotowe!
```

### Opcja 3: Wysłać Google Drive

```
1. Zaloguj do https://drive.google.com
2. Drag & drop CzasPhishingEdu.exe
3. Kliknij Share
4. Wyślij link seniorowi
5. Senior pobierze → kliknie → Gotowe!
```

---

## 🆘 JEŚLI COŚ PÓJDZIE NIE TAK

### Problem: PowerShell pokazuje błąd "npm: The term 'npm' is not recognized"

```
Rozwiązanie:
1. Zainstaluj Node.js: https://nodejs.org/
2. Uruchom PowerShell ponownie
3. Spróbuj npm -v ponownie
```

### Problem: Build zawiesza się na "Building"

```
Rozwiązanie:
1. Poczekaj jeszcze 5 minut
2. Jeśli dalej zawiesza:
   - Naciśnij Ctrl+C
   - npm cache clean --force
   - Spróbuj npm run build-portable ponownie
```

### Problem: "Port 3000 is already in use"

```
Rozwiązanie:
1. Naciśnij Ctrl+C (aby zatrzymać)
2. Zamknij inne PowerShell okna
3. Spróbuj ponownie
```

### Problem: EXE nie uruchamia się

```
Rozwiązanie:
1. Kliknij prawo na plik → Properties
2. Jeśli jest niebieski pasek "Unblock" - kliknij
3. OK → Spróbuj ponownie
```

---

## ⏱️ TIMELINE

```
0:00 - Start
0:02 - npm install
5:02 - npm run build-portable
8:02 - Build skończony ✓
8:05 - Testowanie
10:00 - Gotowe! 🎉
```

---

## 📋 CHECKLIST

- [ ] PowerShell otwarty
- [ ] cd do folderu projektu
- [ ] npm -v (pokazuje wersję)
- [ ] npm install (czekałem ~5 minut)
- [ ] npm run build-portable (czekałem ~5-8 minut)
- [ ] Plik pojawił się w dist/
- [ ] Plik ma ~200 MB
- [ ] Testowałem klikając CzasPhishingEdu.exe
- [ ] Aplikacja uruchomiła się
- [ ] Menu działa
- [ ] Scenariusz działa
- [ ] Quiz działa
- [ ] Offline test przeszedł
- [ ] Gotowe do dystrybucji!

---

## 🎉 SUKCES!

Gdy skończysz wszystko:

```
✅ CzasPhishingEdu.exe
✅ Testowane
✅ Gotowe do dystrybucji
✅ Wszyscy seniorzy mogą się uczyć!
```

---

## 📞 PYTANIA?

Przeczytaj:
- [BUILD_PORTABLE.md](BUILD_PORTABLE.md) - Szczegóły
- [DISTRIBUTION.md](DISTRIBUTION.md) - Dystrybucja
- [WSZYSTKIE_INSTRUKCJE_BUILDU.md](WSZYSTKIE_INSTRUKCJE_BUILDU.md) - Wszystkie komendy

---

## 🚀 ZARAZ RÓB!

```bash
# 1. Otwórz PowerShell
# 2. cd do projektu
# 3. npm install
# 4. npm run build-portable
# 5. Czekaj ~10 minut
# 6. Testuj dist/CzasPhishingEdu.exe
# 7. Wysyłaj do seniorów
# 8. Gratulacje! 🎊
```

---

**Autor:** Marek Piłat
**Projekt:** CzasPhishingEdu

Powodzenia! 🛡️📚
