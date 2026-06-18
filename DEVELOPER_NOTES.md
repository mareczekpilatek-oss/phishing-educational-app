# 🛠️ NOTATKI DLA DEWELOPERA

## Wizja Projektu

Ta aplikacja edukacyjna ma na celu nauczenie osób starszych rozpoznawania ataków phishingowych. Jest 100% bezpieczna i nie transmituje żadnych danych.

---

## 📖 Dla Nowych Deweloperów

### Struktura Projektu

```
src/
├── components/     # Komponenty React (UI)
├── data/          # Dane - phishingScenarios.js
├── styles/        # CSS - global.css
├── App.jsx        # Główny router
└── index.js       # Entry point
```

### Jak Dodać Nowy Scenariusz?

1. **Dodaj dane** w `src/data/phishingScenarios.js`:
```javascript
{
  id: 'nowy-scenariusz',
  title: 'Tytuł...',
  description: 'Opis...',
  riskLevel: 'KRYTYCZNY',
  suspiciousElements: ['Element 1', 'Element 2'],
  consequences: ['Konsekwencja 1'],
  tips: ['Wskazówka 1']
}
```

2. **Utwórz komponent** `src/components/NowyScenariusz.jsx`:
```javascript
import React, { useState } from 'react';

const NowyScenariusz = ({ onNext, onRevealExplanation }) => {
  // Logika...
  return (
    <div className="panel">
      {/* JSX... */}
    </div>
  );
};

export default NowyScenariusz;
```

3. **Dodaj do routingu** w `src/App.jsx`:
```javascript
case 'scenario-nowy-scenariusz':
  return <NowyScenariusz onNext={handleBackToMenu} onRevealExplanation={handleRevealExplanation} />;
```

4. **Dodaj do menu** w `src/components/ScenariosMenu.jsx`:
```javascript
{ id: 5, title: '🆕 Mój scenariusz', key: 'nowy-scenariusz' }
```

---

## 🎨 Style i Animacje

### Dodawanie Nowego Stylu

W `src/styles/global.css`:

```css
.moj-styl {
  background: rgba(0, 255, 0, 0.1);
  border: 2px solid #00ff00;
  padding: 15px;
  border-radius: 5px;
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.6);
}
```

### Czy Potrzebujesz Efektu Świecenia?

```css
.glow {
  text-shadow: 0 0 10px rgba(0, 255, 0, 0.8),
               0 0 20px rgba(0, 255, 0, 0.4);
}
```

---

## 📊 State Management

Aplikacja używa **React hooks** do zarządzania stanem:

```javascript
// W App.jsx
const [currentPage, setCurrentPage] = useState('start');
const [showExplanation, setShowExplanation] = useState(null);
const [quizScore, setQuizScore] = useState(null);

// Komponenty pobierają dane jako props
<Component onNext={handleFunction} />
```

**Nie ma Redux** - nie jest potrzebny dla tej aplikacji.

---

## 🧪 Testowanie

### Manual Testing Checklist

- [ ] Start page się wyświetla
- [ ] Menu główne ma 4 przyciski
- [ ] Scenariusz 1 - Formularz banku
- [ ] Scenariusz 2 - E-mail
- [ ] Scenariusz 3 - Blokada
- [ ] Scenariusz 4 - Hasło
- [ ] Modal wyjaśnień się pojawia
- [ ] Quiz ma 6 pytań
- [ ] Wynik quizu się wyświetla
- [ ] Security Tips się otwiera
- [ ] Footer jest zawsze widoczny

### Browser Testing

- [ ] Chrome (Desktop)
- [ ] Firefox (Desktop)
- [ ] Safari (Mac)
- [ ] Edge (Desktop)
- [ ] Mobile Chrome
- [ ] Mobile Safari

---

## 🚀 Build i Deployment

### Development

```bash
npm start
# Hot reload na portcie 3000
```

### Production Build

```bash
npm run build
# Tworzy /build folder
# ~150KB po minifikacji
```

### Deployment opcje

1. **GitHub Pages**
   ```bash
   npm run build
   # Push /build to gh-pages branch
   ```

2. **Firebase Hosting**
   ```bash
   firebase init hosting
   firebase deploy
   ```

3. **Vercel**
   ```bash
   npm install -g vercel
   vercel
   ```

4. **Statyczny hosting** (AWS S3, Azure Static Web Apps)
   - Upload zawartości /build

---

## 🔒 Bezpieczeństwo - Best Practices

### ✅ CO ROBIMY DOBRZE

- ✅ Brak API calls
- ✅ Brak Local Storage
- ✅ Brak Cookies
- ✅ Brak WebSockets
- ✅ Offline-first design
- ✅ CSP headers ready

### ⚠️ CO NIE ROBIĆ

- ❌ Nie dodawaj API integracji
- ❌ Nie wysyłaj danych na backend
- ❌ Nie używaj fetch/axios dla danych
- ❌ Nie zbieraj informacji użytkownika

---

## 📝 Code Style

### JavaScript

```javascript
// PascalCase dla komponentów
const FakeBankLogin = () => {};

// camelCase dla zmiennych
const [formData, setFormData] = useState({});

// SCREAMING_SNAKE_CASE dla stałych
const MAX_SCENARIOS = 4;

// Funkcje opisowe
const handleButtonClick = () => {};
const calculateQuizScore = () => {};
```

### CSS

```css
/* kebab-case dla klas */
.suspicious-element {
  border: 2px dashed #ff6347;
}

/* BEM convention opcjonalnie */
.panel__header {
  border-bottom: 2px solid #00ff00;
}

/* Rozsądne specyficzności */
.button:hover { /* specificity: 0,0,1,1 */ }
```

---

## 🐛 Debugging

### Browser DevTools

1. Otwórz F12
2. Console - szukaj błędów
3. Elements - sprawdź HTML
4. Network - sprawdź requests (nie powinno być!)
5. Performance - optymalizacja

### React DevTools

Zainstaluj extension Chrome React DevTools:

```
Props inspection
State inspection
Component tree
Hook debugging
```

---

## 📦 Zależności

### Powinne Pozostać Minimalne

```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1"
  }
}
```

### NIE Dodawaj

- ❌ Redux (nie potrzebny)
- ❌ Material-UI (za duży bundle)
- ❌ Axios (nie ma API calls)
- ❌ D3 (nie rysujemy grafów)

### Jeśli Chcesz Dodać

Pytaj: Czy rzeczywiście jest to potrzebne?

---

## 🎯 Roadmap Rozwoju

### v1.0 (Bieżąca) ✅
- ✅ 4 scenariusze
- ✅ Quiz
- ✅ Porada bezpieczeństwa
- ✅ Dokumentacja

### v1.1 (Przyszłość)
- 🔲 Więcej scenariuszy (5-8)
- 🔲 Zaawansowany quiz
- 🔲 Statistyki użytkownika (lokalnie)
- 🔲 I18n (wielojęzyczność)

### v2.0 (Długoterminowo)
- 🔲 Mobile app (React Native)
- 🔲 Offline mode (Service Worker)
- 🔲 Multiplayer quiz
- 🔲 Certyfikat (generowany lokalnie)

---

## 📚 Przydatne Zasoby

### React Docs
- https://react.dev/

### CSS Animations
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations

### WCAG Accessibility
- https://www.w3.org/WAI/WCAG21/quickref/

### Phishing Education
- https://cert.pl/
- https://www.phishing.org/

---

## 💡 Tips & Tricks

### Szybka Edycja CSS
```bash
npm start
# Edytuj global.css - zmienia się na żywo (hot reload)
```

### Debugowanie Stanu
```javascript
console.log('Current state:', currentPage);
// React DevTools pokaże wszystkie props/state
```

### Performance
```bash
npm run build
# Sprawdź rozmiar: ~150KB
# Jeśli większy - coś nie tak
```

### Responsywność
```bash
F12 → Ctrl+Shift+M (Device Toolbar)
# Testuj na różnych rozmiarach
```

---

## 🎓 Nauka z Projektu

Ten projekt uczy:

1. **React Fundamentals**
   - Components
   - State & Props
   - Hooks (useState)
   - Event handling

2. **CSS Animations**
   - Keyframes
   - Transitions
   - Transforms
   - Responsive design

3. **User Experience**
   - Accessibility
   - Typography
   - Color theory
   - Interaction design

4. **Project Management**
   - Documentation
   - File structure
   - Code organization
   - Best practices

---

## 📞 Troubleshooting

### npm install zawiesza się
```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Port 3000 zajęty
```bash
# Sprawdź co zajmuje port
netstat -ano | findstr :3000

# Lub użyj innego portu
$env:PORT=3001; npm start
```

### Hot reload nie działa
```bash
# Restart serwera
Ctrl+C
npm start
```

### Błąd w komponencie
```bash
# Sprawdź console (F12)
# Szukaj błędów React
# Używaj React DevTools
```

---

## ✨ Ostatnie Słowa

### Pamiętaj

- ✅ Kod ma być czytelny
- ✅ Komentarze dla skomplikowanych części
- ✅ Testy manualne przed committem
- ✅ Nie zmieniaj struktury bez powodu
- ✅ Dokumentuj zmiany

### Wspieramy

- ✅ React best practices
- ✅ Accessibility standards
- ✅ Performance optimization
- ✅ Clean code principles

---

**Happy Coding! 🚀**

**Autor:** Marek Piłat
**Projekt:** Phishing Awareness Edukacyjne
