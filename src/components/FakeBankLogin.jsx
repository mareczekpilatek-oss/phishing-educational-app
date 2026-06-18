import React, { useState } from 'react';

const FakeBankLogin = ({ onNext, onRevealExplanation }) => {
  const [formData, setFormData] = useState({ login: '', password: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.login && formData.password) {
      setSubmitted(true);
      onRevealExplanation('bank-login');
    }
  };

  if (submitted) {
    return null;
  }

  return (
    <div className="panel">
      <div className="panel-header">
        <h1 className="glow">🏦 SCENARIUSZ #1</h1>
        <p>Fałszywa strona logowania banku</p>
      </div>

      <div className="warning-box">
        <strong>⚠️ UWAGA:</strong> Przed Tobą znajduje się strona, która wygląda jak portal banku. 
        Spróbuj ją przeanalizować. Czy możesz znaleźć coś podejrzanego?
      </div>

      <div className="fake-form glow-box">
        <div style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>
          <strong>🏛️ MÓJBANK.PL</strong>
        </div>

        <p style={{ color: '#ffcccc', marginBottom: '15px', fontSize: '14px' }}>
          <span className="suspicious-element">
            ⚠️ Adres URL: <strong>bankowe-logowanie.tk</strong> (zamiast moj-bank.pl)
          </span>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Login:</label>
            <input
              type="text"
              name="login"
              value={formData.login}
              onChange={handleInputChange}
              placeholder="Wpisz swój login"
            />
          </div>

          <div className="form-group">
            <label>Hasło:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Wpisz swoje hasło"
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <input
              type="checkbox"
              id="remember"
              style={{ marginRight: '8px', width: '16px', height: '16px', cursor: 'pointer' }}
            />
            <label htmlFor="remember" style={{ cursor: 'pointer', fontSize: '14px' }}>
              Pamiętaj mnie
            </label>
          </div>

          <button type="submit" style={{ width: '100%' }}>
            ZALOGUJ SIĘ
          </button>
        </form>

        <div style={{ marginTop: '20px', textAlign: 'center', fontSize: '12px' }}>
          <a href="#" style={{ color: '#00ff00', textDecoration: 'none' }}>
            Zapomniałeś hasła?
          </a>
        </div>
      </div>

      <div className="info-box">
        <strong>💡 WSKAZÓWKA:</strong> Zwróć uwagę na URL adresu, brak ikony kłódki (HTTPS) 
        i drobiazgi w designie. Rzeczywisty bank wyglądałby inaczej.
      </div>

      <div className="button-group">
        <button className="secondary" onClick={onNext}>
          ← Cofnij się bez wypełniania
        </button>
      </div>
    </div>
  );
};

export default FakeBankLogin;
