import React from 'react';

const MainMenu = ({ onSelectOption }) => {
  return (
    <div className="panel">
      <div className="panel-header">
        <h1 className="glow">🛡️ GŁÓWNE MENU</h1>
        <p>Wybierz moduł edukacyjny</p>
      </div>

      <div className="info-box">
        <strong>Witaj w aplikacji edukacyjnej o phishingu!</strong>
        <p>Wybierz, co chciałbyś zrobić:</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '30px' }}>
        <button
          onClick={() => onSelectOption('scenarios')}
          style={{ background: 'linear-gradient(135deg, #00ff00, #00cc00)', fontSize: '16px' }}
        >
          📚 SCENARIUSZE PHISHINGOWE (4)
        </button>

        <button
          onClick={() => onSelectOption('quiz')}
          style={{ background: 'linear-gradient(135deg, #00ff00, #00cc00)', fontSize: '16px' }}
        >
          🧠 QUIZ - SPRAWDZENIE WIEDZY
        </button>

        <button
          onClick={() => onSelectOption('tips')}
          style={{ background: 'linear-gradient(135deg, #00ff00, #00cc00)', fontSize: '16px' }}
        >
          🛡️ PORADA BEZPIECZEŃSTWA
        </button>

        <button
          onClick={() => onSelectOption('exit')}
          className="secondary"
          style={{ fontSize: '16px' }}
        >
          ❌ WYJDŹ Z APLIKACJI
        </button>
      </div>

      <div style={{ marginTop: '40px', padding: '20px', border: '2px solid #00ff00', borderRadius: '8px' }}>
        <h3>📋 Co się tutaj nauczysz:</h3>
        <ul style={{ fontSize: '14px', marginTop: '10px' }}>
          <li>🎯 Jak rozpoznać fałszywe e-maile bankowe</li>
          <li>🎯 Jakie są czerwone flagi phishingu</li>
          <li>🎯 Jak się chronić przed atakami</li>
          <li>🎯 Co robić, jeśli jesteś ofiarą phishingu</li>
          <li>🎯 Bezpieczne hasła i weryfikacja 2FA</li>
        </ul>
      </div>
    </div>
  );
};

export default MainMenu;
