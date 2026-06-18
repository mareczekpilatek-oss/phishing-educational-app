import React, { useState } from 'react';
import { quizQuestions } from '../data/phishingScenarios';

const Quiz = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const question = quizQuestions[currentQuestion];

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
    setShowExplanation(true);
    
    if (question.options[index].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      onComplete(score, quizQuestions.length);
    }
  };

  const progressPercent = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <div className="panel">
      <div className="panel-header">
        <h1 className="glow">🧠 QUIZ - SPRAWDŹ SWOJĄ WIEDZĘ</h1>
        <p>Pytanie {currentQuestion + 1} z {quizQuestions.length}</p>
      </div>

      <div style={{
        width: '100%',
        height: '20px',
        background: 'rgba(0, 0, 0, 0.5)',
        border: '2px solid #00ff00',
        borderRadius: '5px',
        overflow: 'hidden',
        marginBottom: '20px'
      }}>
        <div style={{
          width: progressPercent + '%',
          height: '100%',
          background: 'linear-gradient(90deg, #00ff00, #00cc00)',
          transition: 'width 0.3s ease'
        }} />
      </div>

      <h3 style={{ marginBottom: '20px', fontSize: '18px', color: '#00ff00' }}>
        {question.question}
      </h3>

      <div style={{ marginBottom: '20px' }}>
        {question.options.map((option, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswerClick(idx)}
            disabled={showExplanation}
            style={{
              display: 'block',
              width: '100%',
              marginBottom: '10px',
              textAlign: 'left',
              padding: '15px',
              background: 
                showExplanation 
                  ? (option.correct 
                    ? 'linear-gradient(135deg, #00ff00, #00cc00)' 
                    : idx === selectedAnswer 
                    ? '#ff6347' 
                    : 'linear-gradient(135deg, #00ff00, #00cc00)')
                  : 'linear-gradient(135deg, #00ff00, #00cc00)',
              opacity: showExplanation && idx !== selectedAnswer && !option.correct ? 0.5 : 1,
              cursor: showExplanation ? 'default' : 'pointer',
              transform: 'none'
            }}
          >
            <strong>{'ABCD'[idx]})</strong> {option.text}
          </button>
        ))}
      </div>

      {showExplanation && (
        <div className="info-box">
          <strong>📚 WYJAŚNIENIE:</strong>
          <p>{question.explanation}</p>
        </div>
      )}

      {showExplanation && (
        <div className="button-group">
          <button onClick={handleNext}>
            {currentQuestion < quizQuestions.length - 1 ? 'Następne pytanie →' : 'Zakończ quiz'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
