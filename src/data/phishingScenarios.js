export const phishingScenarios = [
  {
    id: 'bank-login',
    title: 'Fałszywa strona logowania banku',
    description: 'Oszust tworzy kopię strony banku, aby kradzież dane logowania',
    riskLevel: 'KRYTYCZNY',
    suspiciousElements: [
      'Adres URL: bankowe-logowanie.tk (powinno być: bank.pl)',
      'Brak ikony kłódki (HTTPS)',
      'Błędy ortograficzne w tekście',
      'Nieznane logo banku lub zmodyfikowane'
    ],
    consequences: [
      'Kradzież pieniędzy z konta',
      'Przejęcie dostępu do konta bankowego',
      'Wyciek danych finansowych',
      'Możliwość zaciągnięcia kredytów na Twoje nazwisko'
    ],
    tips: [
      'Zawsze wpisuj adres banku bezpośrednio, nie klikaj linków z e-maili',
      'Sprawdź URL w pasku adresu - powinno być https://twojbank.pl',
      'Szukaj zielonej ikony kłódki (certyfikat SSL)',
      'Nigdy nie wpisuj hasła po kliknięciu linku z e-maila',
      'Bank nigdy nie prosi hasła przez e-mail'
    ]
  },
  {
    id: 'fake-email',
    title: 'Fałszywy e-mail od banku',
    description: 'E-mail udający operatora banku z poleceniem potwierdzenia danych',
    riskLevel: 'WYSOKI',
    suspiciousElements: [
      'Adres nadawcy: security@bank-alert.ru (powinno być oficjalny e-mail banku)',
      'Komunikat o pilnym działaniu',
      'Żądanie kliknięcia linku "natychmiast"',
      'Zastraszanie konsekwencjami (blokada konta)'
    ],
    consequences: [
      'Kradzież danych logowania',
      'Zainfekowanie komputera wirusem',
      'Instalacja spyware\'u (program szpiega)'
    ],
    tips: [
      'Sprawdź dokładnie adres e-maila nadawcy',
      'Bank nie wysyła linków do klikania w e-mailach',
      'Nigdy nie pobieraj załączników z podejrzanych e-maili',
      'Zweryfikuj wiadomość, dzwoniąc do banku',
      'Miej ostrożność wobec naglących komunikatów'
    ]
  },
  {
    id: 'account-locked',
    title: 'Fałszywy komunikat o zablokowanym koncie',
    description: 'Strona informująca o zablokowanym koncie, żądająca weryfikacji',
    riskLevel: 'WYSOKI',
    suspiciousElements: [
      'Wygląd przypomina stronę banku, ale URL jest inny',
      'Nagły komunikat o podejrzanej aktywności',
      'Przycisk "Odblokuj konto" kieruje na stronę phishingu',
      'Brak informacji kontaktowych banku'
    ],
    consequences: [
      'Utrata dostępu do konta',
      'Kradzież tożsamości',
      'Franszyzacja konta do oszustwa'
    ],
    tips: [
      'Zawsze sprawdź URL strony',
      'Dzwoń bezpośrednio na infolinię banku',
      'Nie klikaj linków z e-maili dotyczących bezpieczeństwa',
      'Oficjalny bank nie blokuje konta bez wiadomości SMS lub rozmowy'
    ]
  },
  {
    id: 'password-recovery',
    title: 'Fałszywy formularz odzyskiwania hasła',
    description: 'Strona imitująca proces odzyskiwania hasła',
    riskLevel: 'WYSOKI',
    suspiciousElements: [
      'Prosi o numer PESEL i dane osobowe',
      'Pyta o stare hasło',
      'Adres URL zawiera słowa kluczowe (login, hasło) ale inny domen',
      'Brak weryfikacji dwuetapowej (2FA)'
    ],
    consequences: [
      'Kradzież danych osobowych (PESEL)',
      'Przejęcie konta e-mail',
      'Możliwość przejęcia kont w innych serwisach'
    ],
    tips: [
      'Nigdy nie udostępniaj numeru PESEL online',
      'Bank nigdy nie prosi starego hasła',
      'Prawidłowy bank wysyła kod weryfikacyjny SMS lub e-mail',
      'Zmień hasło bezpośrednio w aplikacji banku, nie na wyskakujących stronach'
    ]
  },
  {
    id: 'social-media',
    title: 'Fałszywe powiadomienie z mediów społecznych',
    description: 'Komunikat o konieczności potwierdzenia danych do konta',
    riskLevel: 'ŚREDNI',
    suspiciousElements: [
      'Link do klikania zamiast wiadomości bezpośredniej',
      'Prośba o potwierdzenie hasła',
      'Alternatywny adres URL (p. facebookAlert.ru zamiast facebook.com)',
      'Wiadomość w złej jakości lub błędy ortograficzne'
    ],
    consequences: [
      'Przejęcie konta na mediach społecznych',
      'Przesłanie wiadomości oszustwa do kontaktów',
      'Kradzież zdjęć i danych osobowych'
    ],
    tips: [
      'Nie klikaj podejrzanych linków z powiadomień',
      'Sprawdź bezpośrednio w ustawieniach konta',
      'Włącz dwuetapową weryfikację (2FA)',
      'Nie odśwież hasła na wyskakujących stronach'
    ]
  }
];

export const commonPhishingTechniques = [
  {
    name: 'Spoof - Podszywanie się',
    description: 'Fałszowanie adresu e-maila lub strony internetowej, aby przypominały legalne źródło',
    example: 'E-mail od "support@bnak.pl" zamiast "support@bank.pl"'
  },
  {
    name: 'Manipulacja psychologiczna',
    description: 'Wywieranie presji poprzez zastraszanie lub tworzenie poczucia pilności',
    example: '"Twoje konto zostanie zablokowane za 24 godziny, chyba że weryfikujesz dane"'
  },
  {
    name: 'Linki zamaskowane',
    description: 'Linki wyglądające normalnie, ale prowadzące do złośliwej strony',
    example: 'Tekst: "Kliknij tutaj" ale URL: malware-site.com'
  },
  {
    name: 'Załączniki złośliwe',
    description: 'Pliki do pobrania zawierające wirusy lub spyware',
    example: 'E-mail z "rachunkiem.exe" lub "dokument.pdf" z wirusem'
  },
  {
    name: 'Inżynieria społeczna',
    description: 'Manipulacja ludźmi poprzez preteksty, aby ujawnili informacje',
    example: 'Dzwonek: "Jestem z IT banku, potrzebuje potwierdzenia Twojego hasła"'
  },
  {
    name: 'Clone phishing',
    description: 'Duplikacja legalnej wiadomości lub strony z lekko zmienionymi linkami',
    example: 'Kopia e-maila z banku, ale link prowadzi do fałszywej strony'
  }
];

export const safety_tips = [
  {
    category: 'E-mail',
    tips: [
      'Nigdy nie klikaj linków z e-maili, nawet jeśli wyglądają oficjalnie',
      'Wpisz adres serwisu bezpośrednio w przeglądarkę',
      'Sprawdź dokładnie adres nadawcy',
      'Nie otwieraj załączników z nieznanych źródeł',
      'Bank nigdy nie prosi hasła przez e-mail'
    ]
  },
  {
    category: 'Hasła',
    tips: [
      'Używaj silnych haseł (minimum 12 znaków)',
      'Nie używaj tego samego hasła na wszystkich stronach',
      'Zmienia hasła regularnie (co 3 miesiące)',
      'Nie notujesz haseł na papierze',
      'Włącz weryfikację dwuetapową (2FA)'
    ]
  },
  {
    category: 'Dane osobowe',
    tips: [
      'Nigdy nie podawaj PESEL online',
      'Nie wyświetlaj numerów kart kredytowych w publicznych miejscach',
      'Nie udostępniaj kodu CVV karty kredytowej',
      'Sważ ostrożnie w mediach społecznych',
      'Nie podawaj odpowiedzi na pytania bezpieczeństwa (imię matki itp.)'
    ]
  },
  {
    category: 'Urządzenia',
    tips: [
      'Zainstaluj program antywirusowy i trzymaj go aktualny',
      'Aktualizuj system operacyjny regularnie',
      'Używaj firewall\'u',
      'Nie podłączaj obcych urządzeń USB',
      'Używaj publicznych sieci Wi-Fi ostrożnie (VPN)'
    ]
  },
  {
    category: 'Weryfikacja',
    tips: [
      'W razie wątpliwości, zadzwoń do banku bezpośrednio',
      'Szukaj zielonej ikony kłódki (HTTPS)',
      'Sprawdzaj certyfikat SSL strony',
      'Czytaj opinie o stronach przed wpisaniem danych',
      'Jeśli coś wygląda podejrzanie, prawdopodobnie jest'
    ]
  }
];

export const quizQuestions = [
  {
    question: 'Jaki adres URL jest podejrzany?',
    options: [
      { text: 'https://moj-bank.pl', correct: false },
      { text: 'https://bezpieczny-bank.ru', correct: true },
      { text: 'https://bank.com.pl', correct: false },
      { text: 'https://bankowość.pl', correct: false }
    ],
    explanation: 'Domena z sufiksem .ru wskazuje na Rosję, a bank polski powinien mieć domenę .pl. To typowy trik phishingowy.'
  },
  {
    question: 'Jaki jest najczęstszy cel ataku phishingowego?',
    options: [
      { text: 'Pobranie oprogramowania', correct: false },
      { text: 'Kradzież danych logowania i finansowych', correct: true },
      { text: 'Zmiana tapety pulpitu', correct: false },
      { text: 'Uszkodzenie drukarki', correct: false }
    ],
    explanation: 'Oszuści chcą uzyskać dostęp do Twoich kont bankowych i danych osobowych, aby kraść pieniądze lub tożsamość.'
  },
  {
    question: 'Co oznacza kod CVV na karcie kredytowej?',
    options: [
      { text: 'Card Verification Value - kod bezpieczeństwa', correct: true },
      { text: 'Card Valid Value - kod ważności', correct: false },
      { text: 'Card Volume Value - kod wielkości', correct: false },
      { text: 'Computer Value Validator - walidator', correct: false }
    ],
    explanation: 'CVV to trzy cyfry na odwrocie karty kredytowej. Nigdy nie podawaj go online, nawet jeśli strona się do tego namawia.'
  },
  {
    question: 'Czy bank wysyła wiadomości proszące o hasło?',
    options: [
      { text: 'Tak, czasami dla bezpieczeństwa', correct: false },
      { text: 'Nie, nigdy bank nie prosi hasła', correct: true },
      { text: 'Tylko przez SMS', correct: false },
      { text: 'Tylko w poniedziałki', correct: false }
    ],
    explanation: 'Nigdy! Żaden bankier nigdy nie prosi hasła. Jeśli ktoś o to prosi, to 100% phishing!'
  },
  {
    question: 'Co wskazuje, że strona jest bezpieczna?',
    options: [
      { text: 'Zielona ikona kłódki i https://', correct: true },
      { text: 'Piękny design strony', correct: false },
      { text: 'Brak napisów w języku obcym', correct: false },
      { text: 'Obecność loga znanych firm', correct: false }
    ],
    explanation: 'Zielona kłódka i https:// oznaczają, że strona ma certyfikat bezpieczeństwa SSL i połączenie jest zaszyfrowane.'
  },
  {
    question: 'Jakie informacje nikdy nie powinnaś podawać online?',
    options: [
      { text: 'Imię i nazwisko', correct: false },
      { text: 'PESEL, CVV karty, hasło', correct: true },
      { text: 'Numer telefonu', correct: false },
      { text: 'Adres e-maila', correct: false }
    ],
    explanation: 'PESEL, kod CVV i hasło to dane wrażliwe. Bank nigdy o nich nie prosi. Podanie ich równa się utracie bezpieczeństwa.'
  }
];
