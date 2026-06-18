import React, { useState } from 'react';

const PasswordRecoveryForm = ({ onNext, onRevealExplanation }) => {
  const [formData, setFormData] = useState({ pesel: '', oldPassword: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.pesel && formData.oldPassword) {
      setSubmitted(true);
      onRevealExplanation('password-recovery');
    }
  };

  if (submitted) {
    return null;
  }

  return (
    <div className="panel">
      <div className="panel-header">
        <h1 className="glow">🔑 SCENARIUSZ #4</h1>
        <p>Fałszywy formularz odzyskiwania hasła</p>
      </div>

      <div className="warning-box">
        <strong>⚠️ UWAGA:</strong> Znalazłeś formularz do odzyskiwania hasła. 
        Przeanalizuj, jakie pola prosi Cię o wypełnienie. Czy to normalne?
      </div>

      <div className="fake-form glow-box">
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>
          Odzyskaj dostęp do konta
        </h3>

        <p style={{ 
          color: '#ffcccc', 
          marginBottom: '15px', 
          fontSize: '14px',
          background: 'rgba(255, 99, 71, 0.1)',
          padding: '10px',
          borderRadius: '4px'
        }}>
          <span className="suspicious-element">
            ⚠️ Wpisz swój numer PESEL, aby potwierdzić tożsamość
          </span>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Numer PESEL:</label>
            <input
              type="text"
              name="pesel"
              value={formData.pesel}
              onChange={handleInputChange}
              placeholder="XX XXX XXXXXX"
              maxLength="11"
            />
            <small style={{ color: '#ffcccc', fontSize: '12px', marginTop: '5px' }}>
              (wymagany do weryfikacji)
            </small>
          </div>

          <div className="form-group">
            <label>Stare hasło:</label>
            <input
              type="password"
              name="oldPassword"
              value={formData.oldPassword}
              onChange={handleInputChange}
              placeholder="Wpisz swoje stare hasło"
            />
            <small style={{ color: '#ffcccc', fontSize: '12px', marginTop: '5px' }}>
              <span className="suspicious-element">
                ⚠️ Dla potwierdzenia tożsamości
              </span>
            </small>
          </div>

          <div className="form-group">
            <label>Nowe hasło:</label>
            <input
              type="password"
              placeholder="Utwórz nowe hasło"
            />
          </div>

          <div className="form-group">
            <label>Potwierdź nowe hasło:</label>
            <input
              type="password"
              placeholder="Powtórz nowe hasło"
            />
          </div>

          <button type="submit" style={{ width: '100%' }}>
            ODZYSKAJ DOSTĘP
          </button>
        </form>

        <p style={{ marginTop: '15px', fontSize: '12px', color: '#00ff00', textAlign: 'center' }}>
          💡 Bezpieczne przesyłanie danych
        </p>
      </div>

      <div className="warning-box" style={{ marginTop: '20px' }}>
        <strong>🚩 PROBLEMY DO ZAUWAŻENIA:</strong>
        <ul style={{ marginTop: '10px', fontSize: '14px' }}>
          <li>Bank NIGDY nie prosi numeru PESEL online</li>
          <li>Bank NIGDY nie prosi starego hasła - nikt go nie potrzebuje!</li>
          <li>Prawidłowy formularz nie pyta o obie informacje naraz</li>
          <li>To kombinacja danych osobowych (PESEL) i dostępu (hasło)</li>
        </ul>
      </div>

      <div className="button-group">
        <button className="secondary" onClick={onNext}>
          ← Cofnij się bez wypełniania
        </button>
      </div>
    </div>
  );
};

export default PasswordRecoveryForm;
