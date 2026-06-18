import React from 'react';
import { phishingScenarios } from '../data/phishingScenarios';

const ExplanationModal = ({ scenarioId, onClose }) => {
  const scenario = phishingScenarios.find(s => s.id === scenarioId);

  if (!scenario) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ color: '#ff6347', marginBottom: '10px' }}>
            ⚠️ CO BYŁO PODEJRZANE?
          </h2>
        </div>

        <h3>Tytuł scenariusza:</h3>
        <p>{scenario.title}</p>

        <h3>Poziom zagrożenia: 
          <span style={{ 
            color: scenario.riskLevel === 'KRYTYCZNY' ? '#ff6347' : '#ff9900',
            marginLeft: '10px',
            fontWeight: 'bold'
          }}>
            {scenario.riskLevel}
          </span>
        </h3>

        <h3>🚩 Podejrzane elementy:</h3>
        <ul style={{ color: '#ffcccc' }}>
          {scenario.suspiciousElements.map((element, idx) => (
            <li key={idx}>{element}</li>
          ))}
        </ul>

        <h3>⚠️ Możliwe konsekwencje:</h3>
        <ul style={{ color: '#ffcccc' }}>
          {scenario.consequences.map((consequence, idx) => (
            <li key={idx}>{consequence}</li>
          ))}
        </ul>

        <h3>✅ Jak się chronić:</h3>
        <ul>
          {scenario.tips.map((tip, idx) => (
            <li key={idx}>{tip}</li>
          ))}
        </ul>

        <div className="warning-box" style={{ marginTop: '20px' }}>
          <strong>🛡️ PAMIĘTAJ:</strong>
          {scenario.riskLevel === 'KRYTYCZNY' 
            ? 'Banki nigdy nie proszą hasła przez e-mail ani na stronie z linku! To zawsze phishing!'
            : 'W razie wątpliwości, zadzwoń bezpośrednio do oficjalnej linii infolinii organizacji, która rzekomo Cię kontaktuje.'}
        </div>

        <div className="button-group">
          <button onClick={onClose}>Rozumiem - Kontynuuj</button>
        </div>
      </div>
    </div>
  );
};

export default ExplanationModal;
