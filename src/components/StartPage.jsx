import React from 'react';

const StartPage = ({ onStart }) => {
  return (
    <div className="panel">
      <div className="panel-header">
        <h1 className="glow">⚠️ PHISHING AWARENES ⚠️</h1>
        <p>Edukacyjna aplikacja o bezpieczeństwie online</p>
      </div>

      <div className="warning-box">
        <strong>🔒 WAŻNE OSTRZEŻENIE:</strong>
        Ta aplikacja jest przeznaczona wyłącznie do celów edukacyjnych. 
        Wszystkie przedstawione ataki są symulowane i w pełni bezpieczne. 
        Nigdy nie powinna być używana do rzeczywistych ataków phishingowych.
      </div>

      <h2>Czym jest phishing?</h2>
      <p>
        Phishing to forma cyberataku, w której oszuści podszywają się pod godne zaufania firmy 
        (banki, e-sklepy, serwisy społeczne), aby skłonić Cię do ujawnienia wrażliwych informacji 
        takich jak:
      </p>
      <ul>
        <li>Dane logowania (login i hasło)</li>
        <li>Numery kart kredytowych</li>
        <li>Numer PESEL</li>
        <li>Dane bankowe</li>
        <li>Hasła dostępu</li>
      </ul>

      <h2>Dlaczego ta aplikacja?</h2>
      <p>
        Każdego roku tysiące osób, szczególnie seniorów, pada ofiarą ataków phishingowych. 
        Ta aplikacja uczy, jak rozpoznawać i unikać takich zagrożeń. Przez interaktywne 
        symulacje dowiesz się:
      </p>
      <ul>
        <li>Jak wyglądają fałszywe e-maile i strony</li>
        <li>Jakie są czerwone flagi ostrzegające przed phishingiem</li>
        <li>Jak chronić swoje dane i konta</li>
        <li>Co robić, jeśli padniesz ofiarą ataku</li>
      </ul>

      <div className="info-box">
        <strong>💡 WSKAZÓWKA:</strong>
        W aplikacji zobaczysz symulacje rzeczywistych ataków phishingowych. 
        Wyjaśnienia pojawią się po Twojej interakcji, aby pokazać, co było podejrzane.
      </div>

      <div className="button-group">
        <button onClick={onStart}>START → Przejdź do lekcji</button>
      </div>

      <div style={{ marginTop: '40px', paddingTop: '20px', borderTop: '2px solid #00ff00' }}>
        <h3>Agenda aplikacji:</h3>
        <ol>
          <li>Fałszywa strona logowania banku</li>
          <li>Fałszywy e-mail od banku</li>
          <li>Komunikat o zablokowanym koncie</li>
          <li>Formularz odzyskiwania hasła</li>
          <li>Quiz do sprawdzenia wiedzy</li>
          <li>Porada bezpieczeństwa</li>
        </ol>
      </div>
    </div>
  );
};

export default StartPage;
