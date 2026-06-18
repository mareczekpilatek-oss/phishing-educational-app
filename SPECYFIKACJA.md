# SPECYFIKACJA TECHNICZNA

## 🏗️ STACK TECHNICZNY

### Framework & Runtime
- **React 18.2.0** - Interfejs użytkownika
- **Node.js** - Runtime
- **npm** - Package Manager

### Biblioteki CSS
- CSS3 nativeowy - Animacje i styling
- Flexbox - Layout
- Grid - Responsywność

### Narzędzia
- **React Scripts** - Build tool
- **Webpack** - Bundler (via react-scripts)

---

## 📁 STRUKTURA PLIKÓW

```
phishing-education-app/
│
├── public/
│   └── index.html                 # HTML główny (punkt wejścia)
│
├── src/
│   ├── components/                # Komponenty React
│   │   ├── AccountBlockedAlert.jsx     # Scenariusz #3
│   │   ├── ExplanationModal.jsx        # Modal wyjaśnień
│   │   ├── FakeBankLogin.jsx           # Scenariusz #1
│   │   ├── FakeEmail.jsx               # Scenariusz #2
│   │   ├── MainMenu.jsx                # Menu główne
│   │   ├── MatrixBackground.jsx        # Animacja
│   │   ├── PasswordRecoveryForm.jsx    # Scenariusz #4
│   │   ├── Quiz.jsx                    # Moduł quizu
│   │   ├── QuizResults.jsx             # Wyniki
│   │   ├── ScenariosMenu.jsx           # Menu scenariuszy
│   │   ├── SecurityTips.jsx            # Porada
│   │   ├── Scanlines.jsx               # Efekt
│   │   └── StartPage.jsx               # Ekran start
│   │
│   ├── data/
│   │   └── phishingScenarios.js   # Wszystkie dane
│   │
│   ├── styles/
│   │   └── global.css             # Style globalne
│   │
│   ├── App.jsx                    # Główny komponent
│   └── index.js                   # Punkt wejścia JS
│
├── package.json                   # Zależności
├── README.md                      # Dokumentacja główna
├── PORADNIK_UZYTKOWNIKA.md       # Instrukcja dla użytkownika
├── INSTALACJA.md                 # Instrukcja instalacji
├── ARCHITEKTURA.md               # Architektura kodu
└── SPECYFIKACJA.md               # Ten plik
```

---

## 🔧 KOMPONENTY - SPECYFIKACJA

### StartPage.jsx

**Props:** `onStart: () => void`

**Stan:** Brak

**Funkcjonalność:**
- Wyświetla ostrzeżenie bezpieczeństwa
- Opis czym jest phishing
- Przycisk START

**Events:**
- onClick → `onStart()`

---

### MainMenu.jsx

**Props:** `onSelectOption: (option: string) => void`

**Stan:** Brak

**Funkcjonalność:**
- Menu z 4 przyciskami
- Wybór modułu

**Options:**
- `'scenarios'` - Scenariusze
- `'quiz'` - Quiz
- `'tips'` - Porada
- `'exit'` - Wyjście

---

### FakeBankLogin.jsx

**Props:**
- `onNext: () => void`
- `onRevealExplanation: (id: string) => void`

**Stan:**
- `formData: { login: string, password: string }`
- `submitted: boolean`

**Funkcjonalność:**
- Wyświetla fałszywy formularz banku
- Zbiera dane (lokalnie, bez wysyłania!)
- Uruchamia wyjaśnienie po submit

---

### FakeEmail.jsx

**Props:**
- `onNext: () => void`
- `onRevealExplanation: (id: string) => void`

**Stan:**
- `clicked: boolean`

**Funkcjonalność:**
- Wyświetla e-mail w formacie
- Linki są klikalny
- Uruchamia wyjaśnienie po kliku

---

### AccountBlockedAlert.jsx

**Props:**
- `onNext: () => void`
- `onRevealExplanation: (id: string) => void`

**Stan:**
- `clicked: boolean`

**Funkcjonalność:**
- Dramatyczne ostrzeżenie o blokowaniu
- Przycisk "ODBLOKUJ"
- Uruchamia wyjaśnienie po kliku

---

### PasswordRecoveryForm.jsx

**Props:**
- `onNext: () => void`
- `onRevealExplanation: (id: string) => void`

**Stan:**
- `formData: { pesel: string, oldPassword: string }`
- `submitted: boolean`

**Funkcjonalność:**
- Formularz z podejrzanymi polami
- PESEL i stare hasło
- Uruchamia wyjaśnienie po submit

---

### ExplanationModal.jsx

**Props:**
- `scenarioId: string`
- `onClose: () => void`

**Stan:** Brak

**Funkcjonalność:**
- Wyświetla dane scenariusza z `phishingScenarios`
- Pokazuje podejrzane elementy
- Konsekwencje i wskazówki

---

### Quiz.jsx

**Props:** `onComplete: (score: number, total: number) => void`

**Stan:**
- `currentQuestion: number`
- `score: number`
- `showExplanation: boolean`
- `selectedAnswer: number | null`

**Funkcjonalność:**
- Wyświetla pytanie
- Zbiera odpowiedź
- Pokazuje wyjaśnienie
- Na koniec uruchamia onComplete

---

### QuizResults.jsx

**Props:**
- `score: number`
- `total: number`
- `onRestart: () => void`

**Stan:** Brak

**Funkcjonalność:**
- Oblicza procent
- Wyświetla ocenę
- Podsumowanie

---

### SecurityTips.jsx

**Props:** `onBack: () => void`

**Stan:**
- `expandedCategory: number | null`

**Funkcjonalność:**
- Wyświetla kategorie
- Toggle dla rozwijania
- Pokazuje wskazówki

---

### MatrixBackground.jsx

**Props:** Brak

**Stan:** `containerRef: RefObject`

**Funkcjonalność:**
- Tworzy efekt Matrix Rain
- Generuje losowe znaki
- Animuje je w dół

---

### Scanlines.jsx

**Props:** Brak

**Stan:** Brak

**Funkcjonalność:**
- CSS div z efektem linii skanowania
- Animacja ciągła

---

## 📊 DATA FLOW

```
App State
├── currentPage: string
├── showExplanation: string | null
├── quizScore: { score, total } | null
│
└── Handlers
    ├── handleStart()
    ├── handleMenuSelection()
    ├── handleScenarioSelect()
    ├── handleRevealExplanation()
    ├── handleExplanationClose()
    ├── handleQuizComplete()
    ├── handleRestartApp()
    └── handleBackToMenu()
```

---

## 🎨 CSS KLASY

### Layout
- `.container` - Główny kontener
- `.panel` - Główny panel
- `.button-group` - Grupa przycisków
- `.form-group` - Grupa formularzy

### Efekty
- `.glow` - Efekt świecenia tekstu
- `.glow-box` - Efekt świecenia pudełka
- `.matrix-char` - Znaki animacji
- `.scanlines` - Linie skanowania
- `.pulse` - Pulsowanie
- `.suspicious-element` - Zaznaczenie

### Alerty
- `.warning-box` - Pudełko ostrzeżenia
- `.info-box` - Pudełko informacyjne

### Stany
- `.modal-overlay` - Overlay modala
- `.modal-content` - Zawartość modala

---

## ⚙️ FUNKCJE GLOBALNE

### phishingScenarios.js

**Export:**
- `phishingScenarios[]` - Tablica scenariuszy
- `commonPhishingTechniques[]` - Techniki
- `safety_tips[]` - Wskazówki
- `quizQuestions[]` - Pytania

**Struktura scenariusza:**
```javascript
{
  id: 'unique-id',
  title: 'Tytuł',
  description: 'Opis',
  riskLevel: 'KRYTYCZNY|WYSOKI|ŚREDNI',
  suspiciousElements: ['Element 1', 'Element 2', ...],
  consequences: ['Konsekwencja 1', 'Konsekwencja 2', ...],
  tips: ['Wskazówka 1', 'Wskazówka 2', ...]
}
```

---

## 🔐 BEZPIECZEŃSTWO - IMPLEMENTACJA

### Co NIE jest robione

❌ Brak transmisji HTTP
❌ Brak WebSocket
❌ Brak Local Storage
❌ Brak Cookies
❌ Brak XMLHttpRequest
❌ Brak Fetch API

### Architektura bezpieczeństwa

```javascript
// Wszystkie dane są w pamięci aplikacji
const phishingData = [...]; // RAM
// Po zamknięciu przeglądarki - wszystko wymazane
```

---

## 📱 RESPONSIVE DESIGN

### Breakpoints

```css
/* Desktop: 800px+ */
.panel {
  max-width: 800px;
  padding: 40px;
}

/* Mobile: <768px */
@media (max-width: 768px) {
  .panel {
    max-width: 100%;
    padding: 25px;
  }
}
```

---

## 🎬 ANIMACJE

### keyframes

1. **matrixRain** - Znaki opadające
   - Duration: 8-12s
   - Delay: 0-5s

2. **scanlines** - Linie skanowania
   - Duration: 8s
   - Loop: infinite

3. **pulse** - Pulsowanie
   - Duration: 1.5s
   - Loop: infinite

4. **fadeIn** - Zanikanie
   - Duration: 0.3s

5. **slideUp** - Wsuwanie
   - Duration: 0.3s

---

## 🧪 TESTING

### Testowe scenariusze

1. **Happy Path**
   - Start → Menu → Scenariusz → Wyjaśnienie → Quiz → Wynik

2. **Multiple Scenarios**
   - Wszystkie 4 scenariusze po kolei

3. **Quiz Only**
   - Start → Menu → Quiz → Wynik

4. **Mobile**
   - Responsywne na 320px, 768px, 1920px

---

## 📦 BUILD PROCESS

### Development
```bash
npm start
→ Webpack dev server
→ Hot reload
→ http://localhost:3000
```

### Production
```bash
npm run build
→ Webpack bundle
→ Minification
→ /build folder
→ Gotowe do deplotu
```

---

## 📊 PERFORMANCE

### Optimizations

- **Code Splitting** - Każdy komponent niezależnie
- **CSS Minification** - W buildzie
- **No Unused Code** - Tree-shaking
- **Lazy Loading** - Możliwe do dodania

### Rozmiar

- **Dev Build**: ~500KB
- **Production Build**: ~150KB (po minifikacji)
- **Runtime Memory**: ~20MB

---

## 🚀 DEPLOYMENT

### Static Hosting

1. **GitHub Pages**
   ```bash
   npm run build
   # Deploy folder /build
   ```

2. **Firebase Hosting**
   ```bash
   firebase deploy
   ```

3. **Vercel**
   ```bash
   vercel
   ```

4. **Lokalne uruchamianie HTML**
   ```bash
   # Otwórz build/index.html
   ```

---

## 🔄 VERSIONING

**Aktualna wersja:** 1.0.0

**Format:** MAJOR.MINOR.PATCH
- **MAJOR**: Duże zmiany (nowe scenariusze)
- **MINOR**: Funkcje (nowe wskazówki)
- **PATCH**: Bugfixy

---

## 📝 CHANGELOG

### v1.0.0 (2026-06-18)
- ✅ Initial release
- ✅ 4 scenariusze
- ✅ Quiz z 6 pytaniami
- ✅ Porada bezpieczeństwa
- ✅ Matrix effect
- ✅ Pełna dokumentacja

---

## 🐛 ZNANE PROBLEMY

### Brak

Aplikacja jest w pełni stabilna i testowana.

---

## 📚 REFERENCJE

### Standardy
- ECMAScript 2020+
- React 18 Best Practices
- CSS3 Animations
- WCAG 2.1 Accessibility

### Konwencje
- PascalCase dla komponentów
- camelCase dla zmiennych
- kebab-case dla CSS
- JSDoc dla funkcji

---

## 👤 AUTOR

**Marek Piłat**
- Aplikacja edukacyjna
- Przeznaczenie: Nauka o phishingu
- Bezpieczeństwo: 100% bezpieczne

---

**Specyfikacja techniczna v1.0**
