# Phishing Awareness - Edukacyjna Aplikacja o Bezpieczeństwie Online

## 📋 Opis Projektu

**Phishing Awareness** to interaktywna aplikacja edukacyjna stworzona w celu nauczenia osób starszych, jak rozpoznawać i unikać ataków phishingowych. Aplikacja symuluje rzeczywiste ataki w bezpiecznym, edukacyjnym środowisku.

### ⚠️ WAŻNE OSTRZEŻENIE
Ta aplikacja jest przeznaczona **WYŁĄCZNIE** do celów edukacyjnych. Wszystkie scenariusze phishingowe są symulowane i całkowicie bezpieczne. Aplikacja nigdy nie wysyła danych, nie łączy się z realnymi serwerami i nie zbiera informacji osobistych.

---

## 🎯 Cele Aplikacji

- ✅ Nauczenie rozpoznawania fałszywych e-maili i stron
- ✅ Wyjaśnienie technik manipulacji oszustów
- ✅ Pokazanie konsekwencji upadnięcia ofiarą phishingu
- ✅ Dostarczenie praktycznych wskazówek bezpieczeństwa
- ✅ Ocena wiedzy poprzez quiz

---

## 📦 Struktura Projektu

```
phishing-education-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── AccountBlockedAlert.jsx      # Scenariusz 3
│   │   ├── ExplanationModal.jsx         # Modal z wyjaśnieniami
│   │   ├── FakeBankLogin.jsx            # Scenariusz 1
│   │   ├── FakeEmail.jsx                # Scenariusz 2
│   │   ├── MainMenu.jsx                 # Menu główne
│   │   ├── MatrixBackground.jsx         # Animacja tła
│   │   ├── PasswordRecoveryForm.jsx    # Scenariusz 4
│   │   ├── Quiz.jsx                     # Moduł quizu
│   │   ├── QuizResults.jsx              # Wyniki quizu
│   │   ├── ScenariosMenu.jsx            # Menu scenariuszy
│   │   ├── SecurityTips.jsx             # Porada bezpieczeństwa
│   │   ├── Scanlines.jsx                # Efekt linii skanowania
│   │   └── StartPage.jsx                # Strona startowa
│   ├── data/
│   │   └── phishingScenarios.js         # Dane i teksty
│   ├── styles/
│   │   └── global.css                   # Style CSS
│   ├── App.jsx                          # Główny komponent
│   └── index.js                         # Punkt wejścia
├── package.json
└── README.md
```

---

## 🎮 Moduły Aplikacji

### 1️⃣ Scenariusze Phishingowe (4 scenariusze)

#### Scenariusz 1: Fałszywa strona logowania banku
- Symulowana strona z polami logowania
- Elementy podejrzane: zły URL, brak HTTPS
- Wyjaśnienie: jak rozpoznać fałszywą stronę

#### Scenariusz 2: Fałszywy e-mail od banku
- E-mail udający bank z linkiem do kliknięcia
- Elementy podejrzane: adres nadawcy .ru, naglący ton
- Wyjaśnienie: techniki socjalnej inżynierii

#### Scenariusz 3: Komunikat o zablokowanym koncie
- Straszące powiadomienie o blokowaniu
- Elementy podejrzane: presja czasowa, brak infolinii
- Wyjaśnienie: psychologiczna manipulacja

#### Scenariusz 4: Formularz odzyskiwania hasła
- Prośba o PESEL i stare hasło
- Elementy podejrzane: żądanie wrażliwych danych
- Wyjaśnienie: kradzież tożsamości

### 2️⃣ Quiz - Sprawdzenie Wiedzy
- 6 pytań z odpowiedziami wielokrotnego wyboru
- Natychmiastowe wyjaśnienia po wyborze
- Wynik procentowy i ocena
- Sugestie do poprawy

### 3️⃣ Porada Bezpieczeństwa
- 6 kategorii wskazówek (E-mail, Hasła, Dane, Urządzenia, Weryfikacja)
- Techniki phishingowe z przykładami
- Najczęstsze błędy seniorów
- Złota zasada bezpieczeństwa

---

## 🎨 Wizualny Styl

- **Motyw**: Ciemny, "hakerski"
- **Kolory**: Neonowa zieleń (#00ff00), ciemne tło (#0a0e27)
- **Efekty**: 
  - Matrix rain w tle
  - Linki skanowania
  - Glow na przyciskach
  - Animacje przejścia
- **Czcionka**: Monospace (Courier New)
- **UI**: Duże przyciski i czytelne teksty dla seniorów

---

## 🚀 Instalacja i Uruchomienie

### Wymagania
- Node.js (v14+)
- npm lub yarn

### Kroki instalacji

```bash
# 1. Przejdź do folderu projektu
cd phishing-education-app

# 2. Zainstaluj zależności
npm install

# 3. Uruchom aplikację
npm start

# Aplikacja otworzy się w przeglądarce na http://localhost:3000
```

### Kompilacja na produkcję

```bash
npm run build
```

---

## 📚 Zawartość Edukacyjna

### Tekst główny scenariuszy

Każdy scenariusz zawiera:
1. **Symulacja wizualna** - wygląda jak rzeczywisty atak
2. **Elementy podejrzane** - zaznaczone czerwoną ramką
3. **Wyjaśnienie** - po interakcji użytkownika
4. **Konsekwencje** - jakie dane mogłyby zostać skradzione
5. **Wskazówki** - jak się chronić

### Quiz

6 pytań sprawdzających:
- Rozpoznawanie podejrzanych adresów URL
- Cele phishingu
- Kodowanie bezpieczeństwa (CVV)
- Zasady bezpieczeństwa haseł
- Certyfikaty SSL
- Dane wrażliwe

### Porada bezpieczeństwa

Sekcje:
- **E-mail**: Jak bezpiecznie korzystać z poczty
- **Hasła**: Tworzenie i zarządzanie hasłami
- **Dane osobowe**: Co nigdy nie podawać online
- **Urządzenia**: Ochrona komputera
- **Weryfikacja**: Jak sprawdzić autentyczność

---

## 🔒 Bezpieczeństwo Aplikacji

✅ **BEZPIECZNE ELEMENTY:**
- ✅ Brak połączeń z realnymi serwerami
- ✅ Brak wysyłania danych
- ✅ Brak zbierania informacji
- ✅ Wszystko działa lokalnie w przeglądarce
- ✅ Brak cookies śledzących
- ✅ Brak transmisji danych

---

## 👥 Docelowa Grupa Użytkowników

- Osoby starsze (60+)
- Osoby nowe w internecie
- Każdy, kto chce uczyć się o bezpieczeństwie online
- Instruktorzy szkolący seniorów

---

## 📝 Wymagania Funkcjonalne (Zrealizowane)

✅ Styl wizualny "hakerski"
✅ 4 symulowane scenariusze phishingowe
✅ Wyjaśnienia po każdej interakcji
✅ Tryb "bezpiecznego błędu"
✅ Quiz na koniec
✅ Panel porad bezpieczeństwa
✅ Lista technik phishingowych
✅ Komunikat bezpieczeństwa na starcie
✅ Podpis autora
✅ Przystosowanie dla seniorów (duże przyciski, czytelny tekst)

---

## 🛠️ Technologie

- **React** - framework do interfejsu
- **JavaScript** - logika aplikacji
- **CSS3** - style i animacje
- **HTML5** - struktura strony

---

## 📄 Licencja

Ta aplikacja jest stworzona do celów edukacyjnych. Użytkowanie wyłącznie w celu nauki.

---

## 👤 Autor

**Marek Piłat**

Aplikacja edukacyjna stworzona w celu zwiększenia świadomości bezpieczeństwa online.

---

## ⚠️ Disclaimer

Ta aplikacja:
- ✅ Jest **całkowicie bezpieczna**
- ✅ **Nigdy nie zbiera danych**
- ✅ **Nigdy nie łączy się z rzeczywistymi serwerami**
- ✅ **Nigdy nie wysyła informacji**
- ✅ Służy **wyłącznie edukacji**

Używając tej aplikacji, potwierdzasz, że zrozumiałeś jej cel edukacyjny.

---

## 🎓 Dodatkowe Zasoby

Polecane źródła edukacyjne:
- [CERT-PL](https://cert.pl/) - Zagrożenia i porada bezpieczeństwa
- [IBMsecurity](https://www.ibm.com/security/) - Artykuły o bezpieczeństwie
- [Urzęd Komunikacji Elektronicznej](https://www.uke.gov.pl/) - Bezpieczeństwo telekomunikacyjne

---

**Dziękuję za skorzystanie z aplikacji edukacyjnej "Phishing Awareness"!**
