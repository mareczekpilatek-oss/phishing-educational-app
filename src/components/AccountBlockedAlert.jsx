import React, { useState } from 'react';

const AccountBlockedAlert = ({ onNext, onRevealExplanation }) => {
  const [clicked, setClicked] = useState(false);

  const handleButtonClick = () => {
    setClicked(true);
    onRevealExplanation('account-locked');
  };

  if (clicked) {
    return null;
  }

  return (
    <div className="panel">
      <div className="panel-header">
        <h1 className="glow">⛔ SCENARIUSZ #3</h1>
        <p>Fałszywy komunikat o zablokowanym koncie</p>
      </div>

      <div className="warning-box">
        <strong>⚠️ UWAGA:</strong> Ktoś wysłał Ci komunikat o problemach z kontem. 
        Czy wiesz, co może być podejrzane?
      </div>

      <div style={{
        background: 'linear-gradient(135deg, rgba(255, 99, 71, 0.2), rgba(255, 99, 71, 0.1))',
        border: '3px solid #ff6347',
        padding: '30px',
        margin: '20px 0',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0 0 20px rgba(255, 99, 71, 0.3)'
      }}>
        <div style={{ fontSize: '48px', marginBottom: '20px' }}>⛔</div>
        
        <h2 style={{ color: '#ff6347', marginBottom: '15px' }}>
          DOSTĘP ZABLOKOWANY!
        </h2>

        <p style={{ color: '#ffcccc', fontSize: '16px', marginBottom: '20px', lineHeight: '1.6' }}>
          Twoje konto w systemie MójBank został zablokowany ze względu na podejrzaną aktywność.
        </p>

        <div style={{
          background: 'rgba(255, 99, 71, 0.1)',
          border: '2px solid #ff6347',
          padding: '15px',
          borderRadius: '5px',
          marginBottom: '20px',
          fontSize: '14px',
          color: '#ffcccc'
        }}>
          <p><strong>Powód:</strong> Logowanie z nieznanej lokalizacji</p>
          <p><strong>Data:</strong> 2026-06-18 14:35</p>
          <p><strong>Lokalizacja:</strong> Niemcy (77.234.156.123)</p>
        </div>

        <p style={{ color: '#ffcccc', marginBottom: '20px', fontSize: '14px' }}>
          Aby chronić Twoje bezpieczeństwo i odblokować konto,
          <span className="suspicious-element"> musisz natychmiast zweryfikować swoją tożsamość.</span>
        </p>

        <button 
          onClick={handleButtonClick}
          style={{
            background: '#ff6347',
            color: '#fff',
            padding: '15px 40px',
            fontSize: '16px',
            marginBottom: '15px'
          }}
        >
          KLIKNIJ ABY ODBLOKOWAĆ KONTO
        </button>

        <p style={{ fontSize: '12px', color: '#00ff00', marginTop: '20px' }}>
          ⏱️ Konto będzie zablokowane na stałe za 24 godziny,
          jeśli nie weźmiesz działania.
        </p>
      </div>

      <div className="info-box">
        <strong>💡 WSKAZÓWKA:</strong> Zwróć uwagę na naglący ton, straszenie blokowaniem 
        i brak dokładnych informacji kontaktowych. Rzeczywisty bank zawsze da Ci numer telefonu!
      </div>

      <div className="button-group">
        <button className="secondary" onClick={onNext}>
          ← Cofnij się bez klikania
        </button>
      </div>
    </div>
  );
};

export default AccountBlockedAlert;
