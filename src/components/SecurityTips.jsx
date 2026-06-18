import React, { useState } from 'react';
import { safety_tips, commonPhishingTechniques } from '../data/phishingScenarios';

const SecurityTips = ({ onBack }) => {
  const [expandedCategory, setExpandedCategory] = useState(null);

  return (
    <div className="panel">
      <div className="panel-header">
        <h1 className="glow">🛡️ PORADA BEZPIECZEŃSTWA</h1>
        <p>Jak się chronić przed phishingiem</p>
      </div>

      <h2>Techniki phishingowe - jak działają?</h2>
      
      {commonPhishingTechniques.map((technique, idx) => (
        <div key={idx} className="info-box" style={{ marginBottom: '15px' }}>
          <h3>{idx + 1}. {technique.name}</h3>
          <p><strong>Opis:</strong> {technique.description}</p>
          <p><strong>Przykład:</strong> <em>{technique.example}</em></p>
        </div>
      ))}

      <h2 style={{ marginTop: '30px' }}>Praktyczne wskazówki bezpieczeństwa</h2>

      {safety_tips.map((category, idx) => (
        <div key={idx} style={{ marginBottom: '20px' }}>
          <button
            onClick={() => setExpandedCategory(expandedCategory === idx ? null : idx)}
            style={{
              width: '100%',
              textAlign: 'left',
              background: 'linear-gradient(135deg, #00ff00, #00cc00)',
              marginBottom: '10px',
              transform: 'none',
              fontSize: '16px'
            }}
          >
            {expandedCategory === idx ? '▼' : '▶'} {category.category}
          </button>

          {expandedCategory === idx && (
            <ul style={{ 
              background: 'rgba(0, 255, 0, 0.1)',
              border: '2px solid #00ff00',
              borderRadius: '5px',
              padding: '15px 15px 15px 35px',
              marginBottom: '10px'
            }}>
              {category.tips.map((tip, tipIdx) => (
                <li key={tipIdx} style={{ marginBottom: '10px' }}>
                  {tip}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <div className="warning-box" style={{ marginTop: '30px' }}>
        <strong>⚠️ NAJCZĘSTSZE BŁĘDY SENIORÓW:</strong>
        <ul style={{ marginTop: '10px' }}>
          <li>Otwieranie załączników z nieznanych źródeł</li>
          <li>Klikanie linków z e-maili bez weryfikacji</li>
          <li>Podawanie haseł przez telefon komuś, kto się podaje za pracownika banku</li>
          <li>Notowanie haseł na papierze lub Post-itach</li>
          <li>Używanie tego samego hasła na wszystkich stronach</li>
          <li>Brak weryfikacji dwuetapowej (2FA)</li>
        </ul>
      </div>

      <div className="info-box" style={{ marginTop: '20px' }}>
        <strong>💡 ZŁOTA ZASADA:</strong>
        <p>Jeśli coś wygląda podejrzanie - prawdopodobnie JEST podejrzane! Zaufaj swoim instynktom i w razie wątpliwości, zawsze zadzwoń bezpośrednio do instytucji, która rzekomo Cię kontaktuje.</p>
      </div>

      <div className="button-group">
        <button onClick={onBack}>← Wróć do menu</button>
      </div>
    </div>
  );
};

export default SecurityTips;
