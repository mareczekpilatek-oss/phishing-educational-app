# INSTRUKCJA INSTALACJI I URUCHOMIENIA

## 🎯 Szybki Start (5 minut)

### Krok 1: Przygotowanie
```bash
# Otwórz PowerShell lub Command Prompt w folderze projektu
# Upewnij się, że masz zainstalowany Node.js:
node --version
npm --version
```

Jeśli Node.js nie jest zainstalowany, pobierz go z: https://nodejs.org/

### Krok 2: Instalacja zależności
```bash
# W folderze phishing-education-app uruchom:
npm install
```

To zajmie ~2-3 minuty. Czekaj, aż zakończy się instalacja.

### Krok 3: Uruchomienie aplikacji
```bash
npm start
```

Aplikacja automatycznie otworzy się w przeglądarce na:
```
http://localhost:3000
```

---

## 📋 Co zrobić, jeśli coś pójdzie nie tak

### Problem: "npm nie jest rozpoznane"
**Rozwiązanie:** Zainstaluj Node.js z https://nodejs.org/

### Problem: "Port 3000 jest już w użyciu"
**Rozwiązanie:** Zmień port w terminalu:
```bash
$env:PORT=3001; npm start
```

### Problem: "Błąd EACCES (Permission denied)"
**Rozwiązanie:** Otwórz PowerShell jako Administrator

### Problem: "npm install nie działa"
**Rozwiązanie:** 
```bash
# Wyczyść cache npm
npm cache clean --force

# Spróbuj ponownie
npm install
```

---

## 🏗️ Kompilacja do pliku HTML (dla dystrybucji)

Jeśli chcesz udostępnić aplikację bez konieczności instalacji Node.js:

```bash
# W folderze projektu uruchom:
npm run build

# Aplikacja będzie w folderze "build/"
```

Możesz wtedy:
1. Skopiować folder `build/` na USB
2. Otworzyć `build/index.html` w przeglądarce
3. Aplikacja będzie działać bez internetu

---

## 📱 Uruchomienie na różnych urządzeniach

### Windows
```bash
npm start
```

### Mac
```bash
npm start
```

### Linux
```bash
npm start
```

---

## 🎮 Obsługa aplikacji

### Myszka
- Klikaj przyciski o zielonym kolorze
- Czytaj wyszczególnione teksy
- Po kliknięciu pojawią się wyjaśnienia

### Klawiatura
- `Tab` - przechodzenie między elementami
- `Enter` - kliknięcie przycisku
- `Escape` - zamknięcie modala (jeśli będzie)

---

## ⚙️ Opcjonalne ustawienia

### Zmiana portu
```bash
$env:PORT=8080; npm start
```

### Uruchomienie produkcyjne
```bash
npm run build
# Następnie serweuj folder build/ za pomocą dowolnego serwera HTTP
```

---

## 📞 Pomoc i wsparcie

Jeśli masz problemy:
1. Sprawdź czy Node.js jest zainstalowany
2. Spróbuj usunąć folder `node_modules/` i uruchomić `npm install` ponownie
3. Sprawdź konsolę przeglądarki (F12) pod kątem błędów

---

## ✅ Wszystko gotowe!

Gratulacje! Aplikacja powinna teraz działać. 

👉 Przejdź do strony `http://localhost:3000` i zacznij naukę!

---

**Autor:** Marek Piłat
**Typ:** Aplikacja edukacyjna
**Bezpieczeństwo:** ✅ 100% bezpieczna, bez zbierania danych
