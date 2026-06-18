import React, { useState } from 'react';

const FakeEmail = ({ onNext, onRevealExplanation }) => {
  const [clicked, setClicked] = useState(false);

  const handleLinkClick = () => {
    setClicked(true);
    onRevealExplanation('fake-email');
  };

  if (clicked) {
    return null;
  }

  return (
    <div className="panel">
      <div className="panel-header">
        <h1 className="glow">📧 SCENARIUSZ #2</h1>
        <p>Fałszywy e-mail od banku</p>
      </div>

      <div className="warning-box">
        <strong>⚠️ UWAGA:</strong> Otrzymałeś e-mail. 
        Przeanalizuj go przed kliknięciem - co wydaje się podejrzane?
      </div>

      <div style={{
        background: 'rgba(30, 40, 60, 0.9)',
        border: '2px solid #00ff00',
        padding: '20px',
        margin: '20px 0',
        borderRadius: '8px',
        fontSize: '13px'
      }}>
        <div style={{ borderBottom: '1px solid #00ff00', paddingBottom: '10px', marginBottom: '15px' }}>
          <p style={{ margin: '5px 0' }}>
            <strong>Od:</strong> <span className="suspicious-element">security@bank-alert.ru</span>
          </p>
          <p style={{ margin: '5px 0' }}>
            <strong>Do:</strong> pani.stefania@gmail.com
          </p>
          <p style={{ margin: '5px 0' }}>
            <strong>Temat:</strong> <span className="suspicious-element">PILNE! Zweryfikuj swoją tożsamość</span>
          </p>
        </div>

        <div style={{ color: '#00ff00', lineHeight: '1.8' }}>
          <p>Droga Pani,</p>

          <p style={{ color: '#ffcccc' }}>
            <strong>⚠️ Wykryliśmy podejrzaną aktywność na Twoim koncie!</strong>
          </p>

          <p>
            System bezpieczeństwa naszego banku zanotował niezwykłe logowanie z nieznanych 
            urządzeń. Aby chronić Twoje konto, musisz natychmiast potwierdzić swoją tożsamość.
          </p>

          <p style={{ color: '#ffcccc' }}>
            <strong>TWOJE KONTO ZOSTANIE ZABLOKOWANE W CIĄGU 24 GODZIN, JEŚLI NIE ZWERYFIKUJESZ SWOICH DANYCH!</strong>
          </p>

          <p>Kliknij poniższy link, aby potwierdzić dane:</p>

          <p style={{ 
            background: 'rgba(0, 255, 0, 0.15)', 
            padding: '10px', 
            margin: '15px 0',
            borderRadius: '4px'
          }}>
            <span className="suspicious-element">
              <a 
                href="#" 
                onClick={handleLinkClick}
                style={{
                  color: '#00ff00',
                  textDecoration: 'underline',
                  cursor: 'pointer'
                }}
              >
                https://moj-bank-secure-verification.ru/verify
              </a>
            </span>
          </p>

          <p>
            Potwierdzenie zajmie Ci mniej niż 2 minuty. Dane zostały zmienione? 
            Skontaktuj się z nami natychmiast!
          </p>

          <p>Z poważaniem,<br/>
            <strong>Dział Bezpieczeństwa MójBank</strong><br/>
            security@bank-alert.ru
          </p>
        </div>
      </div>

      <div className="info-box">
        <strong>💡 WSKAZÓWKA:</strong> Zwróć uwagę na adres nadawcy (.ru zamiast .pl), 
        naglący ton, grożenie blokowaniem konta i żądanie kliknięcia linku. 
        To wszystko cechy phishingu!
      </div>

      <div className="button-group">
        <button className="secondary" onClick={onNext}>
          ← Cofnij się bez klikania
        </button>
      </div>
    </div>
  );
};

export default FakeEmail;
