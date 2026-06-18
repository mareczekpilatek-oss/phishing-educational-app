# ARCHITEKTURA I LOGIKA APLIKACJI

## 🏗️ Architektura Komponentów

```
App.jsx (Główny kontroler)
├── MatrixBackground (Animacja tła)
├── Scanlines (Efekt linii skanowania)
├── Renderowanie strony bieżącej
│   ├── StartPage
│   ├── MainMenu
│   ├── ScenariosMenu
│   ├── Scenariusze (FakeBankLogin, FakeEmail, itp.)
│   ├── Quiz
│   ├── QuizResults
│   └── SecurityTips
└── ExplanationModal (Wyjaśnienia)
```

## 📊 Przepływ Stanu

```
START
  ↓
StartPage (Informacje wstępne)
  ↓
MainMenu (Wybór modułu)
  ├─→ ScenariosMenu
  │     ├─→ FakeBankLogin / FakeEmail / ...
  │     └─→ ExplanationModal
  ├─→ Quiz
  │     └─→ QuizResults
  ├─→ SecurityTips
  └─→ EXIT
```

## 🎮 Interakcje Użytkownika

### Scenariusze

1. **Użytkownik widzi symulację**
   - Strona/e-mail/formularz wygląda jak rzeczywista

2. **Użytkownik kliszy coś podejrzanego**
   - Wprowadza dane lub klika link
   - Uruchamia się `onRevealExplanation()`

3. **Modal się wyświetla**
   - Pokazuje podejrzane elementy
   - Wyjaśnia konsekwencje
   - Daje wskazówki

4. **Powrót do menu scenariuszy**
   - Użytkownik może wybrać inny scenariusz

### Quiz

1. **Wyświetla się pytanie**
2. **Użytkownik wybiera odpowiedź**
3. **Pokazuje się wyjaśnienie**
4. **Po wszystkich pytaniach - wynik**

---

## 💾 Strukturа Danych

### phishingScenarios.js

```javascript
{
  id: 'bank-login',
  title: 'Fałszywa strona logowania banku',
  riskLevel: 'KRYTYCZNY',
  suspiciousElements: [...],
  consequences: [...],
  tips: [...]
}
```

### quizQuestions

```javascript
{
  question: 'Pytanie...',
  options: [
    { text: 'Odpowiedź', correct: true },
    ...
  ],
  explanation: 'Wyjaśnienie...'
}
```

### safety_tips

```javascript
{
  category: 'E-mail',
  tips: ['Wskazówka 1', 'Wskazówka 2', ...]
}
```

---

## 🎨 Style i Efekty

### CSS Classes

- `.glow` - Efekt świecenia tekstu
- `.glow-box` - Efekt świecenia pudełka
- `.matrix-char` - Znaki animacji Matrix
- `.scanlines` - Efekt linii skanowania
- `.pulse` - Efekt pulsowania
- `.suspicious-element` - Zaznaczenie podejrzanego elementu

### Animacje

```css
@keyframes matrixRain - Opada znaki
@keyframes scanlines - Linii skanowania
@keyframes pulse - Pulsowanie
@keyframes fadeIn - Zanikanie
@keyframes slideUp - Wsuwanie w górę
```

---

## 🔄 Cykl Życia Komponentu

### FakeBankLogin

1. **Mount** - Komponent się ładuje
2. **Input** - Użytkownik wpisuje dane
3. **Submit** - Wysyła formularz
4. **Explanation** - Modala się pokazuje
5. **Unmount** - Komponent znika

---

## 🚀 Optymalizacje

- Lazy loading komponentów (mogą być dodane później)
- Memoizacja danych scenariuszy
- Brak niepotrzebnych re-renderów
- Matrix effect limituje liczbę znaków

---

## 🔒 Bezpieczeństwo

**Brak transmisji danych:**
- Aplikacja jest całkowicie offline-first
- Wszystkie dane są w pamięci przeglądarki
- Brak żadnych żądań HTTP do serwerów zewnętrznych
- Brak cookies, local storage nie jest używane

---

## 📝 Proces Dodawania Nowego Scenariusza

Aby dodać nowy scenariusz:

1. **Dodaj dane w `phishingScenarios.js`:**
```javascript
{
  id: 'new-scenario',
  title: '...',
  riskLevel: '...',
  suspiciousElements: [...],
  consequences: [...],
  tips: [...]
}
```

2. **Utwórz komponent:**
```javascript
// src/components/NewScenario.jsx
import React from 'react';

const NewScenario = ({ onNext, onRevealExplanation }) => {
  // Logika...
};

export default NewScenario;
```

3. **Dodaj do App.jsx:**
```javascript
case 'scenario-new-scenario':
  return <NewScenario onNext={...} onRevealExplanation={...} />;
```

4. **Dodaj do ScenariosMenu.jsx:**
```javascript
{ id: 5, title: '...', key: 'new-scenario' }
```

---

## 🧪 Testowanie

Aby przetestować aplikację:

1. Przejdź przez każdy scenariusz
2. Sprawdź quiz z różnymi odpowiedziami
3. Otwórz Security Tips
4. Przetestuj responsywność (F12 → Device Toolbar)

---

## 📦 Produkcja

### Build

```bash
npm run build
```

Tworzy optymalny build w folderze `build/`.

### Deployment

Można umieścić zawartość folderu `build/` na:
- GitHub Pages
- Firebase Hosting
- AWS S3
- Każdy statyczny hosting

---

**Autor Dokumentacji:** Marek Piłat
