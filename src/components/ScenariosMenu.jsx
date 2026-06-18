import React from 'react';

const ScenariosMenu = ({ onSelectScenario, onBack }) => {
  const scenarios = [
    { id: 1, title: '🏦 Fałszywa strona logowania banku', key: 'bank-login' },
    { id: 2, title: '📧 Fałszywy e-mail od banku', key: 'fake-email' },
    { id: 3, title: '⛔ Komunikat o zablokowanym koncie', key: 'account-locked' },
    { id: 4, title: '🔑 Formularz odzyskiwania hasła', key: 'password-recovery' }
  ];

  return (
    <div className="panel">
      <div className="panel-header">
        <h1 className="glow">📚 SCENARIUSZE PHISHINGOWE</h1>
        <p>Wybierz scenariusz do przeanalizowania</p>
      </div>

      <div className="warning-box">
        <strong>ℹ️ JAK TO DZIAŁA:</strong>
        <p>Każdy scenariusz pokazuje symulację ataku phishingowego. 
        Spróbuj go przeanalizować i zauważ, co jest podejrzane. 
        Po interakcji otrzymasz wyjaśnienie.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '30px' }}>
        {scenarios.map((scenario) => (
          <button
            key={scenario.id}
            onClick={() => onSelectScenario(scenario.key)}
            style={{
              background: 'linear-gradient(135deg, #00ff00, #00cc00)',
              fontSize: '15px',
              textAlign: 'left',
              paddingLeft: '20px'
            }}
          >
            Scenariusz {scenario.id}: {scenario.title}
          </button>
        ))}
      </div>

      <div className="info-box" style={{ marginTop: '30px' }}>
        <strong>💡 WSKAZÓWKA:</strong>
        <p>Może przechodzić przez scenariusze w dowolnej kolejności. 
        Możesz je powtarzać tak wiele razy, ile chcesz.</p>
      </div>

      <div className="button-group" style={{ marginTop: '30px' }}>
        <button className="secondary" onClick={onBack}>
          ← Wróć do menu
        </button>
      </div>
    </div>
  );
};

export default ScenariosMenu;
